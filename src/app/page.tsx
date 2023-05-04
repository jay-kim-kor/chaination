// tailwind를 적용하려면 아래를 import해야 함
// 관련 설정은  tailwind.config.js와 https://beta.nextjs.org/docs/styling/tailwind-css 글 참고
import "../styles/globals.css";
import Header from "./(AppComponents)/Header";
import CampaignCard, {
  ICampaignCardProps,
} from "./(AppComponents)/CampaignCard";

export default function Page() {
  const beneficiaries: string[] = campaigns.map((campaign, index) => campaign.beneficiary);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-white font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-500 py-4">
          여러분의 따스한 마음을 기부하세요
        </h1>
        <div className="flex-col justify-center items-center space-y-4">
          {/* 미리 작성된 campaings 배열을 기반으로 렌더링 */}
          {campaigns.map((campaign: ICampaignCardProps, index: number) => (
            <CampaignCard
              {...campaign}
              key={campaign.id}
              beneficiary={beneficiaries}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// 캠페인 카드를 생성할 때 사용할 데이터
export const campaigns: ICampaignCardProps[] = [
  {
    id: 1,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목1",
    description: "캠페인에 대한 상세 내용1",
    duration: "2023-04-17 - 2023-05-16",
    goal: 500000,
    currentAmount: 300000,
    beneficiary: "0x5ada2C5ccf1860BdaaEca022C01F4d86542D3F12",
    nowDonating: true,
  },
  {
    id: 2,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목2",
    description: "캠페인에 대한 상세 내용2",
    duration: "2023-04-17 - 2023-05-16",
    goal: 30000,
    currentAmount: 5000,
    beneficiary: "0x8230976910b329d1c2245E887Acb3EbE16A5C8e6",
    nowDonating: false,
  },
  {
    id: 3,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목3",
    description: "캠페인에 대한 상세 내용3",
    duration: "2023-04-17 - 2023-05-16",
    goal: 10000,
    currentAmount: 0,
    beneficiary: "0x9d0F20729Baf5DE11AaDFda2929BAA24e3C526B6",
    nowDonating: false,
  },
  {
    id: 4,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목4",
    description: "캠페인에 대한 상세 내용4",
    duration: "2023-04-17 - 2023-05-16",
    goal: 1000000,
    currentAmount: 2000,
    beneficiary: "0x3EC7fb4c6A1B0b2989191Cf1ce039F9831AEe156",
    nowDonating: false,
  },
];
