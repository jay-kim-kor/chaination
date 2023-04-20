import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Transfer from './_Transfer';
import Donate from '../../truffle_abis/Donate.json';

type AppProps = {
  beneficiaries: string[];
};

const Donation: React.FC<AppProps> = ({beneficiaries}) => {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contracts, setContracts] = useState<any[]>([]); // 모든 contract 인스턴스를 저장하는 배열
  const [amount, setAmount] = useState<number>(0);


  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setWeb3(web3);
      const networkId = await web3.eth.net.getId();
      const contractAddress = Donate.networks[networkId].address;
      const contractAbi = Donate.abi;
      const instances = beneficiaries.map(beneficiaries => new web3.eth.Contract(contractAbi, contractAddress));
      setContracts(instances);
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
      console.log(beneficiaries)
    };
    init();
  }, [beneficiaries]);

  return (
    <div>
      <h1>My Appss</h1>
      {contracts.map((contract, index) => (
        <div key={index}>
          <Transfer beneficiary={beneficiaries} contract={contract} web3={web3} accounts={accounts}
                donationId={index} amounts={amount}/>
        </div>
      ))}
    </div>
  );
};

export default Donation;  
