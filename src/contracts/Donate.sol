pragma solidity ^0.8.0;

contract Donate {
    struct DonationInfo {
        address donor; // 기부자 주소 
        uint256 amount; // 기부할 금액
        address beneficiary; // 수혜자 주소 
        uint256 unstakedBalance; // 언스테이킹할 금액 
    }

    mapping(uint256 => DonationInfo) public donations;
    uint256 public donationCount = 0;

    mapping(bytes32 => uint256) public stakingAccounts;

    event NewDonation(uint256 donationId, address donor, uint256 amount, address beneficiary); 
    event Staked(address indexed staker, uint amount); // 추가: 스테이킹 이벤트
    event Unstaked(address indexed unstaker, uint amount); // 추가: 언스테이킹 이벤트

    function donate(address _beneficiary, uint256 donationId) payable public { // 스테이킹 함수 
        require(msg.value > 0, "Donation amount should be greater than 0.");
        donations[donationId] = DonationInfo(msg.sender, msg.value, _beneficiary, 0);
        donationCount++;

        // Create staking account for donor
        bytes32 stakingAccount = keccak256(abi.encodePacked(_beneficiary, donationId)); // keccak256 hash function을 사용하여 고유한 스테이킹 계좌 생성
        stakingAccounts[stakingAccount] += msg.value; // 스테이킹 계좌에 기부 금액 추가
        donations[donationId].unstakedBalance += msg.value;

        emit NewDonation(donationId, msg.sender, msg.value, _beneficiary);
        emit Staked(msg.sender, msg.value); // 추가: 스테이킹 이벤트 발생
    }

    function unstake(address payable[] memory beneficiaries, uint256 donationId) public {
        require(beneficiaries.length > 0, "No beneficiaries provided");

        uint256 totalUnstakedAmount = 0;
        bytes32 stakingAccount = keccak256(abi.encodePacked(donations[donationId].beneficiary, donationId));
        uint256 unstakedAmount = stakingAccounts[stakingAccount];
        if (unstakedAmount > 0) {
            for (uint256 j = 0; j < beneficiaries.length; j++) {
                totalUnstakedAmount += unstakedAmount;
            }
            require(totalUnstakedAmount > 0, "No unstaked balance available");

            for (uint256 i = 0; i < beneficiaries.length; i++) {
                require(beneficiaries[i].send(totalUnstakedAmount / beneficiaries.length), "Failed to transfer ether");
                emit Unstaked(beneficiaries[i], totalUnstakedAmount / beneficiaries.length);
            }
            stakingAccounts[stakingAccount] = 0;
            donations[donationId].unstakedBalance = 0;
        }
    }
}
