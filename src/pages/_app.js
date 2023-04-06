
import React, { useState, useEffect } from 'react';
import Donate from '../truffle_abis/Donate.json'; 
import Web3 from 'web3'

function App() {
  const [amount, setAmount] = useState(0);
  const [beneficiary, setBeneficiary] = useState('');
  const [contract, setContract] = useState({});
  const [web3, setWeb3] = useState();
  const [staking, setStaking] = useState();
  

  useEffect(() => {
    async function init() {
      // Ethereum 네트워크에 연결
      let web3 = window.web3
      web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      setWeb3(web3);
      const networkId = await web3.eth.net.getId()
      const contractAddress = Donate.networks[networkId].address;
      const contractAbi = Donate.abi;
      const instance = new web3.eth.Contract(contractAbi, contractAddress);

      setContract(instance);
    }

    init();
  // }, [contract]); <-- 계속 state로 저장된 Contract를 추적
  }, []);

  async function handleDonate(input) {
    const accounts = await web3.eth.getAccounts();
    const amountInWei = web3.utils.toWei(amount.toString());
    console.log(amountInWei, accounts[0], beneficiary)
    console.log(contract.abi)
  
    // Donate 함수를 호출하여 기부금액을 스테이킹하도록 함
    await contract.methods.donate(accounts[0]).send({ from: accounts[0], value: amountInWei });
  
    console.log(`Donation of ${amount} ETH to ${beneficiary} successful`);
    setStaking(amountInWei);
  
    // 스테이킹된 기부금액을 가져와서 출력
    const stakedAmount = await contract.methods.donate(donationCount).call();
    console.log(`Staked amount for donation ${donationCount}: ${stakedAmount}`);
    
  }

  async function transferDonate(){ 
    const accounts = await web3.eth.getAccounts();
    const from = accounts[0]
    const to = '0xC40A22b681f48FC0e75f842EbAbB949be76FAA28'
    await contract.methods.unstake(to).send({ from });
    console.log(`Unstaking of ${staking} ETH successful from ${from}`);
    console.log(contract); 
 
  }

  return (
    <div>
      <h2>Donate</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Beneficiary:
        <input type="text" value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} />
      </label>
      <br />
      <button onClick={handleDonate}>Donate</button>
      <button onClick={transferDonate}>Transfer</button>
    </div>
  );
}


export default App;