// tailwind를 적용하려면 아래를 import해야 함
// 관련 설정은  tailwind.config.js와 https://beta.nextjs.org/docs/styling/tailwind-css 글 참고
import "../styles/globals.css";
import Header from "./(AppComponents)/Header";
import CampaignList from "./(AppComponents)/CampaignList";
import Image from "next/image";
import logoimage from "../../public/volunteer.png";

export default function Page() {

  return (
    <>
      <div className="container mx-auto px-4">
        <Image
          alt="testimage"
          src={logoimage}
        />
        <CampaignList campaigns={campaigns} />
      </div>
    </>
  );
}

// 캠페인 카드를 생성할 때 사용할 데이터
export const campaigns: ICampaignCardProps[] = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/premium-photo/cute-happy-poor-black-child-at-home_21730-14540.jpg",
    title: "극한의 상황에도 웃음을 잃지않는 소년",
    description: "캠페인에 대한 상세 내용1",
    duration: "2023-04-17 - 2023-05-16",
    goal: 1000000,
    currentAmount: 450000,
    beneficiary: "0x303bD2170BD64e3Ee3Af2b5d77a9e05feEA49825",
    nowDonating: true,
  },
  {
    id: 2,
    imageUrl:
      "https://www.worldvision.or.kr/campaign/2015/images_giveup/gallery_01.jpg",
    title: "배고픈 남부 아프리카 아이들을 위한 한 끼",
    description: "캠페인에 대한 상세 내용2",
    duration: "2023-04-17 - 2023-05-16",
    goal: 1200000,
    currentAmount: 350000,
    beneficiary: "0xb941D25Eb30bc4fC33c9d93D522C7700BB749068",
    nowDonating: false,
  },
  {
    id: 3,
    imageUrl:
      "https://images.chosun.com/resizer/vcSV6NWdwbLKS5MKSlg2b_qBPsU=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/2CCPZJSW5HWK2I5J3QYTJCIDPE.jpg",
    title: "추위에 고통스러워하는 고양이",
    description: "캠페인에 대한 상세 내용3",
    duration: "2023-04-17 - 2023-05-16",
    goal: 600000,
    currentAmount: 100000,
    beneficiary: "0x2EaEd391Ba249Dae46Df8a9AC00348eDD8790070",
    nowDonating: false,
  },
  {
    id: 4,
    imageUrl:
      "https://wplyuoicjiwl13857209.cdn.ntruss.com/data2/content/image/2020/06/17/.cache/512/20200617222402.jpg",
    title: "지병으로 인해 숨을 쉬기 힘든 강아지",
    description: "캠페인에 대한 상세 내용4",
    duration: "2023-04-17 - 2023-05-16",
    goal: 900000,
    currentAmount: 450000,
    beneficiary: "0x3EC7fb4c6A1B0b2989191Cf1ce039F9831AEe156",
    nowDonating: false,
  },
];
