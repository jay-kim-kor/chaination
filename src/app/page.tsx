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
    description: "소년의 부족 500명이 한 달 동안 넉넉히 사용할 수 있는 물 300,000리터를 정화하는데 200,000원이 필요합니다. 깨끗한 물은 콜레라와 같은 수인성 질병을 예방해줍니다. 한 사람이 하루에 마시고, 씻는데 필요한 물은 20리터 정도 입니다.",
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
    description: "남부 아프리카 아이들의 여러 부족에서 일어나고 있는 현상인 영양실조는,  영양실조에 걸린 한 명의 어린이가 건강하게 회복할 수 있도록 영양가 높은 영양치료식(Ready-to-Use Therapeutic Food / RUTF)을 5주동안 제공하려면 최소 350,000원이 필요합니다.",
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
    description: "길 위에서 살아가는 길고양이들의 삶은 너무나도 척박합니다. 살기 위해 목숨을 걸고 찻길을 건너야 하고, 사람을 피해 숨어들어간 좁은 틈이나 배수관에 갇히기도 합니다. 겨울에는 추위를 피해 자동차 보닛이나 타이어에 숨어들었다가 큰 사고를 당하는 경우도 많습니다.  ",
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
    description: "오로지 '비싼' 개'를 얻으려는 불법 번식을 통해 선천적으로 듣지 못하는 병이 태어난 말론은 일상생활에서도 주변환경의 소리를 듣지 못해 자주 위험에 처하고 있습니다. 외부환경에서 일상생활을 하기 힘든 말론은 특히 자동차의 소리를 듣지못해 큰 위험에 처할뻔 하기도 합니다.",
    duration: "2023-04-17 - 2023-05-16",
    goal: 900000,
    currentAmount: 450000,
    beneficiary: "0x3EC7fb4c6A1B0b2989191Cf1ce039F9831AEe156",
    nowDonating: false,
  },
];
