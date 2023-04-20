import Header from "./Header";
import CampaignCard from "./CampaignCard";
import { useState, useEffect } from "react";

const campaigns: CampaignCardProps[] = [
  {
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 500000,
    currentAmount: 300000,
    beneficiary: "0x5ada2C5ccf1860BdaaEca022C01F4d86542D3F12",
  },
  {
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 30000,
    currentAmount: 5000,
    beneficiary: "0x8230976910b329d1c2245E887Acb3EbE16A5C8e6",
  },
  {
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 10000,
    currentAmount: 0,
    beneficiary: "0x9d0F20729Baf5DE11AaDFda2929BAA24e3C526B6",
  },
  {
    imageUrl:
      "https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585",
    title: "캠페인 제목을 작성해주세요",
    description: "캠페인에 대한 설명을 작성해주세요",
    duration: "2023-04-17 - 2023-05-16",
    goal: 1000000,
    currentAmount: 2000,
    beneficiary: "0x3EC7fb4c6A1B0b2989191Cf1ce039F9831AEe156",
  },
];

const Main = () => {
  const [beneficiarys, setBeneficiarys] = useState<string[]>([]);
  useEffect(() => {
    setBeneficiarys(campaigns.map((campaign) => campaign.beneficiary));
    console.log(campaigns.map((campaign) => campaign.beneficiary));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-500 py-4"
          style={{
            backgroundImage: "linear-gradient(to right, #fad0c4, #ffd1ff)",
          }}
        >
          여러분의 따스한 마음을 기부하세요
        </h1>
        <div className="flex-col   justify-center items-center space-y-4">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              {...campaign}
              key={campaign.title}
              beneficiary={beneficiarys}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
