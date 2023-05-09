//트랜잭션 기록 가져오기
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

    const valueInEther = web3.utils.fromWei(transaction.value, "ether"); // 값 변환
    const gasPriceInGwei = web3.utils.fromWei(transaction.gasPrice, "gwei"); // 가스 가격 변환
    const shortHash = transactionHash.slice(0, 4) + "..." + transactionHash.slice(-4); // 해시 코드를 앞에서 4글자와 뒤에서 4글자로 줄입니다.
    const shortFrom = transaction.from
    ? transaction.from.slice(0, 4) + "..." + transaction.from.slice(-4)
    : "Unknown"; // 기부자 주소를 앞에서 4글자와 뒤에서 4글자로 줄입니다.
  const shortTo = transaction.to
    ? transaction.to.slice(0, 4) + "..." + transaction.to.slice(-4)
    : "Unknown"; // 수혜자 주소를 앞에서 4글자와 뒤에서 4글자로 줄입니다.
    return (
        <div className="flex border-b">
            <h3>Transaction Details ({shortHash})</h3>
            <p>수혜자: {shortFrom} </p>
            <p>기부자: {shortTo} </p>
            <p>Value: {valueInEther} ether</p> {/*ether 단위로 표시*/}
            <p>Gas Price: {gasPriceInGwei} Gwei</p> {/*Gwei 단위로 표시*/}
        </div>
    );
};
