import React, { useEffect, useState } from 'react';
import Web3 from 'web3'

interface Donation {
  account: string;
  campaignId: string;
  amounts: number[];
}

const MyDonation: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null); // 현재 MetaMask 계정 저장

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    const fetchCurrentAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setCurrentAccount(accounts[0]); // 현재 MetaMask 계정 설정
    };
  
    fetchCurrentAccount();
    const fetchDonations = () => {
      const donatedCampaigns: Donation[] = [];
  
      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith('donatedAmount')) {
          const [_, account, campaignId] = key.split('-');
          if (account === currentAccount) { // 현재 MetaMask 계정과 일치하는 기부 내역만 처리
            const amounts = JSON.parse(sessionStorage.getItem(key) || '[]');
            const donationIndex = donatedCampaigns.findIndex((donation) => donation.campaignId === campaignId);
  
            if (donationIndex !== -1) {
              donatedCampaigns[donationIndex].amounts.push(...amounts);
            } else {
              donatedCampaigns.push({ account, campaignId, amounts });
            }
          }
        }
      });
  
      setDonations(donatedCampaigns);
    };
  
    fetchDonations();
  }, [currentAccount]);
  
  return (
    <div>
      <h2>내 기부 기록</h2>
      <div className="flex flex-col border-b">
        {donations.map((donation, index) => (
          <div key={index}>
            <h3>Campaign ID: {donation.campaignId}</h3>
            <ul>
              {donation.amounts.map((amount, i) => (
                <li key={i}>참여 금액: {amount} ETH</li>
              ))}
            </ul>
            <p>총합: {donation.amounts.reduce((a, b) => a + b, 0)} ETH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
