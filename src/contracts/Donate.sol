pragma solidity ^0.8.0;

contract Donate {
    struct DonationInfo {
        address donor; // 기부자 주소 
        uint256 amount; // 기부할 금액
        address beneficiary; // 수혜자 주소 
        uint256 stakedBalance; // 스테이킹할 금액
        uint256 unstakedBalance; // 언스테이킹할 금액 
    }

    mapping(uint256 => DonationInfo) public donations;
    uint256 public donationCount = 0;

    event NewDonation(uint256 donationId, address donor, uint256 amount, address beneficiary); 
    event Staked(address indexed staker, uint amount); // 추가: 스테이킹 이벤트
    event Unstaked(address indexed unstaker, uint amount); // 추가: 언스테이킹 이벤트

    function donate(address _beneficiary) payable public { // 스테이킹 함수 
        require(msg.value > 0, "Donation amount should be greater than 0.");
        donations[donationCount] = DonationInfo(msg.sender, msg.value, _beneficiary, 0, 0); // stake를 할 때마다 컨트랙트를 호출한 사람, 값, 수혜자, 스테이킹할 금액, 언스테이킹할 금액을 배열에 저장함 
        donationCount++; // 다음 배열로 넘어가서 저장할 정보를 기다림 

        // 스테이킹 기능 추가
        DonationInfo storage donation = donations[donationCount-1]; // 21번에 해당하는 내용을 donation에 저장 
        donation.stakedBalance += msg.value; // 값을 스테이킹 금액에 저장 
        donation.unstakedBalance = donation.stakedBalance; // 언스테이킹할 금액을 똑같이 저장 

        emit NewDonation(donationCount, msg.sender, msg.value, _beneficiary);
        emit Staked(msg.sender, msg.value); // 추가: 스테이킹 이벤트 발생
    }

function unstake(address payable beneficiary) public { // 언스테이킹 함수 
    require(donationCount > 0, "No donation exists");
    uint256 totalUnstakedAmount = 0; // 언스테이킹 할때마다 스테이킹 된 금액을 한꺼번에 언스테이킹할 변수 선언 및 초기화
    for (uint256 i = 0; i < donationCount; i++) { // 0번부터 마지막으로 저장된 staking 금액을 검색함 
        DonationInfo storage donation = donations[i];  
        uint256 unstakedAmount = donation.unstakedBalance;
        if (unstakedAmount > 0) { // 언스테이킹할 금액이 있을 경우 
            totalUnstakedAmount += unstakedAmount; 
            donation.unstakedBalance = 0;
        }
    }
    require(totalUnstakedAmount > 0, "No unstaked balance available");
    (bool success, ) = beneficiary.call{value: totalUnstakedAmount}(""); // 수혜자의 주소와 totalUnstakedAmount 값을 받아서 send같은 함수에 쓸 수 있게 함  
    require(success, "Failed to transfer ether");
    emit Unstaked(beneficiary, totalUnstakedAmount); // 추가: 언스테이킹 이벤트 발생
}

}