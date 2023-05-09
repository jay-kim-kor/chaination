"use client"

import React, { useState } from "react";
import { Web3Provider } from "../(AppComponents)/Web3Context";
import { TransactionInfo } from "../(AppComponents)/TransactionInfo";

const History: React.FC = () => {
  const [transactionHash, setTransactionHash] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionHash(event.target.value);
  };

  return (
    <Web3Provider providerUrl="http://localhost:8545">
      <div className="History">
        <input
          type="text"
          placeholder="트랜잭션 해시를 입력하세요"
          value={transactionHash}
          onChange={handleInputChange}
        />
        {transactionHash && <TransactionInfo transactionHash={transactionHash} />}
      </div>
    </Web3Provider>
  );
};

export default History;
