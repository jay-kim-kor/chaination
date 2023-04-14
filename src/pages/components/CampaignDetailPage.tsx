interface CampaignDetailPageProps {
    campaignid?: string;
}
const CampaignDetailPage = ({ campaignid }: CampaignDetailPageProps) => {
  return (
    <div>
      <h1>Campaign Detail Page</h1>
      <p>Campaign ID: {campaignid}</p>
    </div>
  );
};

export default CampaignDetailPage;