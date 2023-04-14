import CampaignDetailPage from '../components/CampaignDetailPage';

const CamGive1 = ({ id }) => {
  return <CampaignDetailPage campaignid={id} />;
};

export async function getStaticProps() {
    return {
      props: {
        id: '1',
      },
    };
  }
  
export default CamGive1;