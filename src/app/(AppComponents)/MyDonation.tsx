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
      const donatedCampaigns: Donation[] = [];

      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith('donatedAmount')) {
          const [_, account, campaignId] = key.split('-');
          const amounts = JSON.parse(sessionStorage.getItem(key) || '[]');
          const donationIndex = donatedCampaigns.findIndex((donation) => donation.campaignId === campaignId);

          if (donationIndex !== -1) {
            donatedCampaigns[donationIndex].amounts.push(...amounts);
          } else {
            donatedCampaigns.push({ account, campaignId, amounts });
          }
        }
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
