//헤더에서 내정보 클릭시 보여줄 페이지
// 그림, 내계정, 내 기록, 캠페인 카드, 캠페인 카드에 참여기록, 총 참여기록 
"use client";
import { useState, useEffect } from "react";
import Web3 from "web3";
import CampaignCard, {
  ICampaignCardProps,
} from "../(AppComponents)/CampaignCard";

type Props = {};

const campaigns: CampaignCardProps[] = [
  {
    imageUrl: 'https://en.kriseinformation.dk/Media/638144674912320589/Sundhed_Humanitaer_bidrag_boks.svg?crop=715%2C228%2C584%2C585',
    title: '캠페인 제목을 작성해주세요',
    description: '캠페인에 대한 설명을 작성해주세요',
    duration: "2023-04-17 - 2023-05-16",
    goal: 500000,
    currentAmount: 300000,
  },
];

export default function MyInfo({}: Props) {

  const [accountId, setAccountId] = useState<string>("");

  useEffect(() => {
    // Web3 객체 생성
    const web3 = new Web3(Web3.givenProvider);

    // 현재 연동된 계정 주소 가져오기
    async function getCurrentAccount() {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }

    // 현재 연동된 계정 주소 설정하기
    getCurrentAccount().then((account) => {
      setAccountId(account);
    });
  }, []);

 

  return (
    <div className="container mx-auto px-4 pt-24">
      {/*메타마스크를 표현하는 그림 */}
      <img src="../METAMASK_LOGO/02.png" alt="METAMASK" className="w-64 h-64 object-cover" />




      {/*메타마스크와 연동시켜 내 계정 가져오기*/}
      <div className="flex items-center">
        <img src="이미지 URL" alt="이미지 설명" className="w-10 h-10" />
        <input
          type="text"
          className="bg-white rounded-lg shadow-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500 focus:border-transparent"
          value={accountId}
          readOnly // 수정이 불가하게 변경
          onChange={(e) => setAccountId(e.target.value)}
          placeholder="메타마스크에 로그인하세요."
        />
      </div>

      {/* 내 기록을 알려주는 글*/}
      <h1 className="text-2xl font-bold">
        내 기록
      </h1>

      {/* 캠페인카드 불러오기 */}
      <div className="flex-col justify-center items-center space-y-4">
          {campaigns.map((campaign) => (
            <CampaignCard {...campaign} key={campaign.title} />
          ))}
        </div>

      {/* 캠페인카드 옆에 캠페인에 내가 기부한 금액 */}
      <div>

      </div>
      
      {/* 내 전체 기록 */}
      <div>

      </div>
    </div>


  );
}
