import Header from './Header';
import CampaignCard from './CampaignCard';

const campaigns: CampaignCardProps[] = [
  {
    imageUrl: 'https://www.ghibli.jp/gallery/umi015.jpg',
    title: '불쌍한 런처',
    description: '택현이의 런처를 위해 골드를 기부해주세요',
    duration: "2023-04-15 - 2023-05-16",
    goal: 500000,
    currentAmount: 3000,
  },
  {
    imageUrl: 'https://www.ghibli.jp/gallery/umi004.jpg',
    title: '불쌍한 블레',
    description: '블레를 버프해주세요',
    duration: "2023-04-15 - 2023-05-16",
    goal: 30000,
    currentAmount: 5000,
  },
  {
    imageUrl: 'https://www.ghibli.jp/gallery/umi031.jpg',
    title: '요원 너무약함',
    description: '버프가 필수적임',
    duration: "2023-04-15 - 2023-05-16",
    goal: 10000,
    currentAmount: 50,
  },
];

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-500 py-4" style={{backgroundImage: 'linear-gradient(to right, #fad0c4, #ffd1ff)'}}>
        여러분의 따스한 마음을 기부하세요
        </h1>
        <div className="flex-col justify-center items-center space-y-4">
          {campaigns.map((campaign) => (
            <CampaignCard {...campaign} key={campaign.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;