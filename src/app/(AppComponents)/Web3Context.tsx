"use client"
import { createContext, useContext, useState, useEffect } from "react";
import Web3 from "web3";

const Web3Context = createContext<Web3 | undefined>(undefined);

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  providerUrl: string;
  children: React.ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ providerUrl, children }) => {
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);

  useEffect(() => {
    const newWeb3 = new Web3(providerUrl);
    setWeb3(newWeb3);
  }, [providerUrl]);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};
