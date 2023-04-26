"use client"
import React, { useState, useEffect } from 'react'
import Web3 from "web3";

const MetamaskInfo: React.FC = () => {
    const [LoggedIn, setLoggedIn] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");

    async function MetamaskLogin(){
        const web3 = new Web3(window.ethereum);
        if(!web3){ alert("메타마스크를 설치해주세요"); return; }
    
        try{
            const accounts = await window.ethereum.enable();
            setLoggedIn(true);
            setAccount(accounts[0])
            
        } catch (err) {
            alert("메타마스크 연결 권한이 필요합니다.")
        }
    }

    return(
        <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer" onClick={MetamaskLogin}>
        {LoggedIn ? ("현재 계좌는 " + account):(
        <div onClick={MetamaskLogin}>로그인</div>
        )}
        </div>
    );
}

export default MetamaskInfo