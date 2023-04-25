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
}

const CampaignBar = ({
  goal,
  currentAmount,
}: {
  goal: number;
  currentAmount: number;
}) => {
  const percentage = (currentAmount / goal) * 100;

  return (
    <div className="bg-gray-200 rounded-full w-full">
      <div
        className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
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
}: ICampaignCardProps) {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contracts, setContracts] = useState<any[]>([]); // 모든 contract 인스턴스를 저장하는 배열
  const [amount, setAmount] = useState<number>(0);
  const [current, setCurrent] = useState(currentAmount);
  console.log(beneficiary);

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setWeb3(web3);
      const networkId = await web3.eth.net.getId();
      const contractAddress = Donate.networks[`${networkId}`].address;
      const contractAbi: any = Donate.abi;
      const instances = beneficiary.map(
        (beneficiaries) => new web3.eth.Contract(contractAbi, contractAddress)
      );
      setContracts(instances);
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
      console.log(beneficiary);
    };
    init();
  }, [beneficiary]);

  const handlesDonate = (amount: number) => {
    const updatedCurrent = current + amount;
    setCurrent(updatedCurrent); // Donate 10 units
  };

  return (
    <div className="flex-grow w-full md:w-full p-4">
      <Link href={`/campaign/${title}`}>
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
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
      </Link>
    </div>
  );
}
