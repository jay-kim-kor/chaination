// src/TransactionInfo.tsx
"use client"
import React, { useState, useEffect } from "react";
import { useWeb3 } from "./Web3Context";

interface TransactionInfoProps {
  transactionHash: string;
}

export const TransactionInfo: React.FC<TransactionInfoProps> = ({ transactionHash }) => {
  const web3 = useWeb3();
  const [transaction, setTransaction] = useState<any>({});

  useEffect(() => {
    const fetchTransaction = async () => {
      if (web3) {
        try {
          const tx = await web3.eth.getTransaction(transactionHash);
          setTransaction(tx);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchTransaction();
  }, [web3, transactionHash]);

  if (!transaction || Object.keys(transaction).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Transaction Details</h3>
      <p>From: {transaction.from}</p>
      <p>To: {transaction.to}</p>
      <p>Value: {transaction.value} wei</p>
      <p>Gas Price: {transaction.gasPrice} Gwei</p>
    </div>
  );
};
