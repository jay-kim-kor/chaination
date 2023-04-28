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
    title: "캠페인 제목을 작성해주세요1",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 500000,
    currentAmount: 300000,
    beneficiary: "0x996540f542161F9728A8FF04f2f472c243eDA13A",
    nowDonating: true,
  },
  {
    id: 2,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요2",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 30000,
    currentAmount: 5000,
    beneficiary: "0x42684B4ed6268965b585a7e331B51bAe5c53fe9c",
    nowDonating: false,
  },
  {
    id: 3,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 10000,
    currentAmount: 0,
    beneficiary: "0xE31dA464577D6Ce2511D14897CE9D87B0b5FB3aF",
    nowDonating: false,
  },
  {
    id: 4,
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 1000000,
    currentAmount: 2000,
    beneficiary: "0x9c7c5d50ed4b0049Ce2Fd1Bd8B2A8b9F49B24DBA",
    nowDonating: false,
  },
];
