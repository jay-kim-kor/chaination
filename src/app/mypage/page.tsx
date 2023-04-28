//헤더에서 내정보 클릭시 보여줄 페이지
// 그림, 내계정, 내 기록, 캠페인 카드, 캠페인 카드에 참여기록, 총 참여기록 
"use client";
import { useState, useEffect } from "react";
import Web3 from "web3";
import CampaignCard, {
  ICampaignCardProps,
} from "../(AppComponents)/CampaignCard";
import { campaigns } from '../page'

type Props = {};

export default function MyInfo({ }: Props) {
  const [nowDonatingsState, setNowDonatingsState] = useState<boolean[]>([]);
  const nowDonatings: boolean[] = campaigns.map((campaign, index) => campaign.nowDonating);

  const [accountId, setAccountId] = useState<string>("");

  useEffect(() => {
    setNowDonatingsState(nowDonatings);

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

    // 웹페이지 세션 저장소에 현재 접속한 메타마스크 계정 주소를 기준으로 저장된 true를 받음 
    // 그 값을 useState에 저장  
    const nowDonatingsFromLocalStorage = campaigns.map((campaign, index) => {
      const nowDonatingState = sessionStorage.getItem(`nowDonating-${index}-${accountId}`) === 'true';
      return nowDonatingState;
    });
    setNowDonatingsState(nowDonatingsFromLocalStorage);


  }, [accountId]);


  return (
    <div className="container mx-auto px-4 pt-24">
      {/*메타마스크를 표현하는 그림 */}
      <img src="/02.png" alt="METAMASK" className="object-cover" />


      {/*메타마스크와 연동시켜 내 계정 가져오기*/}
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="flex-grow bg-white rounded-lg shadow-md px-10 py-3 text-lg font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500 focus:border-transparent"
          value={accountId}
          readOnly // 수정이 불가하게 변경
          onChange={(e) => setAccountId(e.target.value)}
          placeholder="메타마스크에 로그인하세요."
        />
      </div>

      {/* 내 기록을 알려주는 글*/}
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          참여 기록
        </h1>
      </div>

      {/* 캠페인카드 불러오기 */}
      <div>         
        <div className="flex-col justify-center items-center space-y-4">
        {/* 미리 작성된 campaings 배열을 기반으로 렌더링 */}
        {campaigns.filter((campaign, index) => nowDonatingsState[index]).map((campaign: ICampaignCardProps, index: number) => (
          <CampaignCard
            {...campaign}
            key={campaign.id}
            beneficiary={beneficiaries}
            index={index}
          />
        ))}
        </div>
      
      {/* 캠페인카드 옆에 캠페인에 내가 기부한 금액 */}
        <div >

        </div>
      </div>
      
      {/* 내 전체 기록 */}
      <div>

      </div>
    </div>


  );
}
