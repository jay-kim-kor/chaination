"use client"

import React, { useState, useEffect } from "react";
import Transfer from "../../(AppComponents)/_Transfer";
import Web3 from "web3";
import Donate from "../../../truffle_abis/Donate.json";

const DetailBars =({ // 현재 진행 그래프 표시 
    currentAmount
    }: {
        currentAmount:number; 
    }) => {
    const goal = 5000 // 목표값 임의 설정 
    const percentage = (currentAmount / goal) * 100;
    const intPercentage = Math.floor(percentage);
  
    return (
      <div className="bg-gray-200 rounded-lg w-full relative">
        <div
          className="bg-red-300 text-xs leading-none py-1 text-center text-white top-o left-0 rounded-lg"
          style={{ width: `${intPercentage}%` }}
        >
          {intPercentage}%
        </div>
      </div>
    );
  };

const detailInfo = ()=> {

  const currentAmount = 1000; // 캠페인 그래프의 현재값 임의 설정 
  const [beneficiaries, setBeneficiaries] = useState<string[]>([]);
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [contracts, setContracts] = useState<any>();
  const [accounts, setAccounts] = useState<string>();
  const [current, setCurrent] = useState(currentAmount);

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(window.ethereum);
      if(!web3){ // 현재 접속한 브라우저에 메타마스크가 없으면 아래부분들을 실행하지 않겠다는 부문 
        return;
      }
      setWeb3(web3);
      const networkId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      const contractAddress = Donate.networks[`${networkId}`].address;
      const contractAbi: any = Donate.abi;
      const instances = new web3.eth.Contract(contractAbi, contractAddress)
      setContracts(instances);
      setAccounts(accounts)
      setBeneficiaries(['0x5ada2C5ccf1860BdaaEca022C01F4d86542D3F12']) // 수혜자 주소 임의 설정
    };
    init();

//   }, [accounts]); <-- 접속 주소가 바뀔 때 마다 체크하여 곧바로 Donate, Transfer버튼이 바뀜
    }, []);

  const handlesDonate = (amount: number) => { // 캠페인 그래프의 값을 더하는 함수 
    const updatedCurrent = current + amount;
    setCurrent(updatedCurrent); 
  };


  return (
    <div>
        <div className="my-4">
        캠페인에 후원되어있는 현재 금액: {current}원
        </div>
        <p className="my-4">목표 금액: 5000원</p>
    <div>
    <DetailBars currentAmount={current} />
    </div>
    <br></br>
    <Transfer
    beneficiary={beneficiaries}
    contract={contracts}
    web3={web3}
    accounts={accounts}
    donationId={0}
    handlesDonate={handlesDonate}
    />
    </div>
  );
};

export default detailInfo;
