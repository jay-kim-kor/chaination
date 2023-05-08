"use client";
import React, { useState } from 'react';
import Web3 from 'web3'

type TransferProps = {
  beneficiary: string[];
  contract: DonateContract;
  donationId: number;
  handlesDonate: Function;
  nowDonating: boolean;
  accounts: string;
  web3: any;
};

type DonateContract = {
  methods: {
    donate: (account: string) => any;
    unstake: (account: string) => any;
  }
}


const Transfer: React.FC<TransferProps> = ({ beneficiary, contract, web3, donationId, accounts, handlesDonate}) => {
  const [amount, setAmount] = useState<number>(0);
  console.log(contract)


  async function handleDonate(): Promise<void> {
    const accounts = await web3.eth.getAccounts();
    const amountInWei = web3.utils.toWei(amount.toString());
    if (!accounts[0]) {
      alert("메타마스크 로그인이 필요합니다.")
      return;
    }
    await contract.methods.donate(beneficiary[donationId], donationId).send({ from: accounts[0], value: amountInWei });
    handlesDonate(amount)

    const storageKey = `donatedAmount-${accounts[0]}-${donationId}`;
    const currentAmountArray = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
    //sesstionStorage를 사용해서 amount값을 저장
    currentAmountArray.push(amount);
    sessionStorage.setItem(storageKey, JSON.stringify(currentAmountArray));

    sessionStorage.setItem(`nowDonating-${donationId}-${accounts[0]}`, 'true');
    alert(`${amount}ETH만큼 기부했습니다!`)

  }

  async function transferDonate(): Promise<void> {
    const accounts = await web3.eth.getAccounts();
    const from = accounts[0]
    if (!from) {
      alert("메타마스크 로그인이 필요합니다.")
      return;
    }
    const beneficiaries = [beneficiary[donationId]];
    if (from == beneficiary[donationId]) {
      await contract.methods.unstake(beneficiaries, donationId).send({ from });
    } else {
      alert("캠페인에 등록된 주소가 아니면 금액 전송이 불가능합니다!")
      return;
    }
  }


  if (accounts == beneficiary[donationId]) {
    return (
      <div>
        <button className="absolute bottom-0 left-0 w-full bg-red-300 hover:bg-red-400 transition duration-500 ease-in-out text-white py-4 rounded-b-lg"
          onClick={transferDonate}>전송하기</button>
        <br />
        <br />
        <div className="text-gray-500 text-sm">
        </div>
      </div>
    );
  } else {
    return (

      <div className="pl-4 pr-4">
         <label className="absolute left-0 w-full bg-red-300 rounded-md hover:bg-red-400 transition duration-500 ease-in-out text-white py-4 rounded-b-lg">
          기부금액:
          <input className="Justify-center Item-center W-full px-4 py-1.5 bg-red-500 text-black rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-470"
            type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </label>
        <br />
        <br />
        <button className="absolute bottom-0 left-0 w-full bg-red-300 hover:bg-red-400 transition duration-500 ease-in-out text-white py-4 rounded-b-lg"
          onClick={handleDonate}>기부하기</button>
        <br />
        <br />
        <div className="text-gray-500 text-sm">
        </div>
      </div>
    );
  }
}

export default Transfer;
