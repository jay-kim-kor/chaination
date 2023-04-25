"use client";

import Web3 from "web3";
import Donate from "../../truffle_abis/Donate.json";

// 캠페인 카드가 요구하는 값들의 타입
export interface ICampaignCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  goal: number;
  currentAmount: number;
  beneficiary: string;
}

// 컴파일된 abi 파일의 networks 키에 대한 타입
// 이해 안 가면 Donate.json 파일에 10145~10151번째 줄 참고
interface IDonateNetworks {
  networks: {
    [key: string]: {
      events: {};
      links: {};
      address: string;
      transactionHash: string;
    };
  };
}

export default function CampaignCard({
  imageUrl,
  title,
  description,
  goal,
  currentAmount,
  duration,
  beneficiary,
}: ICampaignCardProps) {
  const init = async () => {
    // Web3.js를 이용해 메타마스크 연동
    const web3 = new Web3((window as any).ethereum);

    // 사용자가 메타마스크에 연결해 둔 블록체인 네트워크 ID를 호출하고,
    // 그걸로 가나슈와 연결
    const networkId = await web3.eth.net.getId();
    const contractAddress = (Donate as IDonateNetworks).networks[
      networkId.toString()
    ].address;

    // 연결된 걸 호출할 수 있도록 인스턴스 생성
    const contractAbi: any = Donate.abi;
    const instance = new web3.eth.Contract(contractAbi, contractAddress);
  };

  const handlesDonate = (amount: number) => {
    const updatedCurrent = current + amount;
    setCurrent(updatedCurrent); // Donate 10 units
  };

  return (
    <div className="flex-grow w-full md:w-full p-4">
      <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-85 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{duration}</p>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <CampaignBar goal={goal} currentAmount={current} />
          <div className="flex justify-between mt-4">
            <div className="text-gray-500 text-sm">목표 모금액: {goal}ETH</div>
            <div className="text-gray-500 text-sm">
              {goal - current}ETH 남음
            </div>
          </div>
          <Transfer
            beneficiary={beneficiary}
            contract={contracts[index]}
            web3={web3}
            accounts={accounts}
            donationId={index}
            amounts={amount}
            current={current}
            handlesDonate={handlesDonate}
          />
        </div>
      </div>
    </div>
  );
}

// 캠페인 카드 안에서 기부 현황을 그려주는 바 컴포넌트
function CampaignProgress({
  goal,
  currentAmount,
}: {
  goal: number;
  currentAmount: number;
}) {
  const percentage = (currentAmount / goal) * 100;

  return (
    <div className="bg-gray-200 rounded-full w-full">
      <div className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full">
        {percentage}%
      </div>
    </div>
  );
}
