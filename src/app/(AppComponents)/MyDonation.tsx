import React, { useEffect, useState } from 'react';

interface Donation {
  account: string;
  campaignId: string;
  amount: number;
}

const MyDonation: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchDonations = () => {
      const donatedCampaigns = Object.keys(localStorage)
        .filter((key) => key.startsWith('donatedAmount'))
        .map((key) => {
          const [_, account, campaignId] = key.split('-');
          const amount = JSON.parse(localStorage.getItem(key) || '0');
          return { account, campaignId, amount };
        });

      setDonations(donatedCampaigns);
    };

    fetchDonations();
  }, []);

  return (
    <div>
      <h2>My Donations</h2>
      <ul>
        {donations.map((donation, index) => (
          <li key={index}>
            Campaign ID: {donation.campaignId}, Amount: {donation.amount} ETH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyDonation;
