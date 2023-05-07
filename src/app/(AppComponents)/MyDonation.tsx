// MyDonation.tsx
import React, { useEffect, useState } from 'react';

interface Donation {
  account: string;
  campaignId: string;
  amounts: number[];
}

const MyDonation: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchDonations = () => {
      const donatedCampaigns = Object.keys(sessionStorage)
        .filter((key) => key.startsWith('donatedAmount'))
        .map((key) => {
          const [_, account, campaignId] = key.split('-');
          const amounts = JSON.parse(sessionStorage.getItem(key) || '[]');
          return { account, campaignId, amounts };
        });

      setDonations(donatedCampaigns);
    };

    fetchDonations();
  }, []);

  return (
    <div>
      <h2>내 기부 기록</h2>
      <div className="flex flex-col border-b">
        {donations.map((donation, index) => (
          <li key={index}>
            Campaign ID: {donation.campaignId}
            <ul>
              {donation.amounts.map((amount, i) => (
                <li key={i}>참여 금액: {amount} ETH</li>
              ))}
            </ul>
            총합: {donation.amounts.reduce((a, b) => a + b, 0)} ETH
          </li>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
