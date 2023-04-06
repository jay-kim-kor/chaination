// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Donate {
//     struct DonationInfo {
//         address donor;
//         uint256 amount;
//         address beneficiary;
//     }

//     mapping(uint256 => DonationInfo) public donations;
//     uint256 public donationCount = 0;

//     event NewDonation(uint256 donationId, address donor, uint256 amount, address beneficiary);
//     event EtherSent(address indexed from, address indexed to, uint256 amount); // 추가: 이더 전송 이벤트

//     function donate(address _beneficiary, uint256 _amount) payable public {
//         require(msg.value > 0, "Donation amount should be greater than 0.");
//         donations[donationCount] = DonationInfo(msg.sender, _amount, _beneficiary);
//         donationCount++;
//         emit NewDonation(donationCount, msg.sender, _amount, _beneficiary);
//     }

//     function sendEther(address payable _to, uint256 _amount) public {
//         require(_amount > 0, "Sent amount should be greater than 0.");
//         require(address(this).balance >= _amount, "Not enough balance in contract.");
//         _to.transfer(_amount);
//         emit EtherSent(address(this), _to, _amount);
//     }
// }

pragma solidity ^0.8.0;

contract Donate {
    struct DonationInfo {
        address donor;
        uint256 amount;
        address beneficiary;
        uint256 stakedBalance;
        uint256 unstakedBalance;
    }

    mapping(uint256 => DonationInfo) public donations;
    uint256 public donationCount = 0;

    event NewDonation(uint256 donationId, address donor, uint256 amount, address beneficiary);
    event Staked(address indexed staker, uint amount); // 추가: 스테이킹 이벤트
    event Unstaked(address indexed unstaker, uint amount); // 추가: 언스테이킹 이벤트

    function donate(address _beneficiary) payable public {
        require(msg.value > 0, "Donation amount should be greater than 0.");
        donations[donationCount] = DonationInfo(msg.sender, msg.value, _beneficiary, 0, 0);
        donationCount++;

        // 스테이킹 기능 추가
        DonationInfo storage donation = donations[donationCount-1];
        donation.stakedBalance += msg.value;
        donation.unstakedBalance = donation.stakedBalance;

        emit NewDonation(donationCount, msg.sender, msg.value, _beneficiary);
        emit Staked(msg.sender, msg.value); // 추가: 스테이킹 이벤트 발생
    }

function unstake(address payable beneficiary) public {
    require(donationCount > 0, "No donation exists");
    uint256 totalUnstakedAmount = 0;
    for (uint256 i = 0; i < donationCount; i++) {
        DonationInfo storage donation = donations[i];
        uint256 unstakedAmount = donation.unstakedBalance;
        if (unstakedAmount > 0) {
            totalUnstakedAmount += unstakedAmount;
            donation.unstakedBalance = 0;
        }
    }
    require(totalUnstakedAmount > 0, "No unstaked balance available");
    (bool success, ) = beneficiary.call{value: totalUnstakedAmount}("");
    require(success, "Failed to transfer ether");
    emit Unstaked(beneficiary, totalUnstakedAmount); // 추가: 언스테이킹 이벤트 발생
}

}