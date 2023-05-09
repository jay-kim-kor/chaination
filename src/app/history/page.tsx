//History를 보여주는 페이지
"use client"

import React, { useEffect, useState } from "react";
import { Web3Provider, useWeb3 } from "../(AppComponents)/Web3Context";
import { TransactionInfo } from "../(AppComponents)/TransactionInfo";
import { Transaction as Web3Transaction } from "web3-core";

// 트랜잭션 목록을 표시하는 컴포넌트
const TransactionList: React.FC = () => {
    const web3 = useWeb3();
    const [transactions, setTransactions] = useState<Web3Transaction[]>([]);
    
    useEffect(() => {
        const fetchTransactions = async () => {
            if (web3) {
                try {
                    // 사용자 계정 가져오기
                    const accounts = await web3.eth.getAccounts();
                    const userAccount = accounts[0];
                    // 최근 블록 번호 가져오기
                    const latestBlockNumber = await web3.eth.getBlockNumber();
                    let userTransactions = [];
                    // 각 블록의 트랜잭션을 가져와서 사용자와 관련된 트랜잭션 필터링
                    for (let i = latestBlockNumber; i >= 0; i--) {
                        const block = await web3.eth.getBlock(i, true);
                        if (block && block.transactions) {
                            const relevantTransactions = block.transactions.filter(
                                (tx) => tx.from === userAccount || tx.to === userAccount
                            );
                            userTransactions.push(...relevantTransactions);
                        }
                    }
                    // 필터링된 트랜잭션을 상태에 저장
                    setTransactions(userTransactions);
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
        // 트랜잭션 목록 가져오기
        fetchTransactions();
    }, [web3]);

    // 트랜잭션 목록을 반복하여 TransactionInfo 컴포넌트에 전달
    return (
        <div>
            {transactions.map((transaction) => (
                <TransactionInfo key={transaction.hash} transactionHash={transaction.hash} />
            ))}
        </div>
    );
};
// 트랜잭션 세부 정보를 표시합니다.
const History: React.FC = () => {
    return (
        <Web3Provider providerUrl="http://localhost:8545">
            <div className="History">
                <TransactionList />
            </div>
        </Web3Provider>
    );
};

export default History;
