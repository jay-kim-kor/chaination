"use client";

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Transfer from "./_Transfer";
import Donate from "../../truffle_abis/Donate.json";
import Link from "next/link";

export interface ICampaignCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  goal: number;
  currentAmount: number;
  beneficiary: string[];
  nowDonating: boolean;
}

const CampaignBar = ({
  goal,
  currentAmount,
}: {
  goal: number;
  currentAmount: number;
}) => {
  const percentage = (currentAmount / goal) * 100;
  const intPercentage = Math.floor(percentage);

  return (
    <div className="bg-gray-200 rounded-full w-full">
      <div
        className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full"
        style={{ width: `${intPercentage}%` }}
      >
        {intPercentage}%
      </div>
    </div>
  );
};

export default function CampaignCard({
  imageUrl,
  title,
  description,
  goal,
  currentAmount,
  duration,
  beneficiary,
  index,
  nowDonating,
}: ICampaignCardProps) {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [accounts, setAccounts] = useState<string>();
  const [contracts, setContracts] = useState<any[]>([]); // 모든 contract 인스턴스를 저장하는 배열
  const [amount, setAmount] = useState<number>(0);
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
      console.log(accounts)
      const contractAddress = Donate.networks[`${networkId}`].address;
      const contractAbi: any = Donate.abi;
      const instances = beneficiary.map(
        (beneficiaries) => new web3.eth.Contract(contractAbi, contractAddress)
      );
      setContracts(instances);
      setAccounts(accounts)
    };
    init();
  }, [beneficiary]);

  const handlesDonate = (amount: number) => {
    const updatedCurrent = current + amount;
    setCurrent(updatedCurrent); // Donate 10 units
  };

  return (
    <div className="flex-grow w-full md:w-full p-4">
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
        <Link href="/detailpage">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-85 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{duration}</p>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <CampaignBar goal={goal} currentAmount={current} />
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm">
                목표 모금액: {goal}ETH
              </div>
              <div className="text-gray-500 text-sm">
                {goal - current}ETH 남음
              </div>
            </div>
          </div>
        </Link>
          <Transfer
              beneficiary={beneficiary}
              contract={contracts[index]}
              web3={web3}
              donationId={index}
              amounts={amount}
              accounts={accounts}
              current={current}
              handlesDonate={handlesDonate}
            />
        </div>
    </div>
  );
}
