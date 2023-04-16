import React, { useState, useEffect } from 'react';
import Donate from '../truffle_abis/Donate.json'; 
import Web3 from 'web3'
import Header from './components/Header';
import Main from './components/Main';
import '../styles/globals.css';

type AppProps = {};

type DonateContract = {
  methods: {
    donate: (account:string) => any;
    unstake: (account:string) => any;
  }
}

const App: React.FC<AppProps> = () => {
  const [amount, setAmount] = useState<number>(0); // 값을 상태에 저장 
  const [beneficiary, setBeneficiary] = useState<string>(''); // 수혜자 주소를 상태에 저장 
  const [contract, setContract] = useState<DonateContract | {}>({}); // 계약을 상태에 저장 (다른 곳에서 contract를 따로 선언하지 않아도 됨)
  const [web3, setWeb3] = useState<Web3 | undefined>(); // web3 상태 저장 
  const [staking, setStaking] = useState<string | undefined>(); // 스테이킹한 금액을 상태에 저장 
  

  useEffect(() => {
    async function init() {
      // Ethereum 네트워크에 연결
      let web3 = window.web3
      web3 = new Web3(window.ethereum)
      await window.ethereum.enable() // 이더리움 네트워크를 연결 할 수 있게 함, 처음으로 웹사이트에 접속시 메타마스크의 네트워크와 연결 알림 뜸 
      setWeb3(web3); // 위에 설정한 web3을 상태에 저장하여 다른 함수에서 쓸 수 있게 함 
      const networkId = await web3.eth.net.getId() // 네트워크 ID 불러옴 * truffle_config = ganache의 네트워크를 따라감 = 1337  
      const contractAddress = Donate.networks[networkId].address; 
      const contractAbi = Donate.abi; 
      const instance = new web3.eth.Contract(contractAbi, contractAddress); // 계약과 계약을 배포한 주소를 instance라는 객체에 저장함 
      const accountsB = await web3.eth.getAccounts() // 잔액 확인 테스트용 
      const eth = await web3.eth.getBalance(accountsB[0]) // 현재 로그인한 계좌의 잔액 확인하는 함수
      console.log(eth) 

      setContract(instance); // instance라는 객체를 Contract 상태에 저장함으로써 다른 함수에서도 계약의 함수들을 사용할 수 있음 
    }

    init();
  }, []);

  async function handleDonate(): Promise<void> { // 스테이킹 함수 
    if(!web3) return;
    const accounts = await web3.eth.getAccounts(); // 지금 접속한 메타마스크의 계정을 불러옴 
    const amountInWei = web3.utils.toWei(amount.toString()); // 현재 접속한 메타마스크의 잔액을 불러옴(문자열 타입)

    // Donate 스마트 컨트랙트의 donate함수를 호출함 
    await contract.methods.donate(accounts[0]).send({ from: accounts[0], value: amountInWei });  // 현재 접속한 메타마스크의 계정을 받아서 account 만큼을 스테이킹 하도록 함 
  
    console.log(`Donation of ${amount} ETH to ${beneficiary} successful`);
    setStaking(amountInWei); // 금액을 스테이킹 잔액 상태에 저장함 51번의 console문을 위해 존재함
  }

  async function transferDonate(): Promise<void>{  // 언스테이킹 함수 
    const accounts = await web3.eth.getAccounts();  
    const from = accounts[0] // 메타마스크의 계정 주소를 저장함 
    const to = beneficiary // Beneficiary: text에 입력된 수혜자의 주소를 저장함 
    await contract.methods.unstake(to).send({ from }); // 수혜자에게 스테이킹(저장)된 금액을 전달함, 수수료를 내야해서 지금 접속한 메타마스크 계정에서 수수료를 뺌
    console.log(`Unstaking of ${staking} ETH successful from ${from}`);

    // 수혜자 주소와 계약을 콘솔로 띄우고 싶으면 console.log(to or contract 하면 된다)
  }

   // *** await contract.methods.unstake(to).send({ from }); 의 send는 스마트 컨트랙트에 있는 함수가 아닌 web3에서 지원하는 이더리움을 보낼 수 있게 하는 함수임 

  return (
    <div className="h-screen bg-cover" style={{ backgroundImage: "url('background-image-url')" }}>
  <Main/>
    </div>
  );
}


export default App;