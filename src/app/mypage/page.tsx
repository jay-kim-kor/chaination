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

//캠페인카드를 불러오는 함수
export default function MyInfo({ }: Props) {
  const [nowDonatingsState, setNowDonatingsState] = useState<boolean[]>([]);
  const beneficiaries: string[] = campaigns.map((campaign, index) => campaign.beneficiary);
  const nowDonatings: boolean[] = campaigns.map((campaign, index) => campaign.nowDonating);
  const [googleUser, setGoogleUser] = useState(null);
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
    <>

      <div className="flex items-center justify-center w-full h-25 border-b px-8 py-8">
        <div className="bg-red-300 rounded-full text-2xl font-bold mx-auto px-4 py-2">
          내정보
        </div>
        <div className="bg-red-300 rounded-full text-2xl font-bold mx-auto px-4 py-2">
          참여 기록
        </div>
        <div className="mx-auto">

        </div>
      </div>
      <div className="flex w-full justify-center ">

        {/*기본적인 내 정보*/}
        <div className="flex w-1/5 h-[1200px] mx-8">

          <div className="pt-6">
            {/* 연결된 계정에서 이름 가져오기*/}
            <div>
              이름
            </div>
            {/* 현재 로그인 되어있는 ID*/}
            <div>
              ID
            </div>

            <div className="border-4 w-full h-auto">
              {/*메타마스크 로고 */}
              <img src="/02.png" alt="METAMASK" className="object-cover w-auto" />
            </div>

            <div className="flex flex items-center justify-center">
              {/*메타마스크와 연동시켜 내 계정 가져오기*/}
              <div className=" ">
                <input
                  type="text"
                  className="flex-grow bg-white rounded-lg shadow-md px-10 py-3 text-base font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500 focus:border-transparent"
                  value={accountId}
                  readOnly // 수정이 불가하게 변경
                  onChange={(e) => setAccountId(e.target.value)}
                  placeholder="메타마스크에 로그인하세요."
                />
              </div>
            </div>
          </div>
        </div>

        {/* 캠페인카드 불러오기 , 참여기록이 없을때 표시창 필요함*/}
        <div className="flex w-4/5 h-[1200px] border-r bg-red-300">
          {campaigns.filter((campaign, index) => nowDonatingsState[index]).length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h2 className="text-2xl  font-bold">
                조건에 맞는 캠페인 카드가 없습니다.</h2>
            </div>
          ) : (
            <>
              <div className="flex-col items-center  p-4 pt-24 space-y-4">
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
              <div className="mx-auto px-4">
                <div className="flex items-center justify-center">
                  {/* 캠페인카드 옆에 캠페인에 내가 기부한 금액 */}
                  <div>캠페인카드 공간</div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 빈공간 */}
        <div className="flex w-1/3 ">

        </div>

      </div>
    </>
  );
}
