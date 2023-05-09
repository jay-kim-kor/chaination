"use client";
import { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3('http://127.0.0.1:8545');

const BlockInfo = () => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [block, setBlock] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBlock = async () => {
    setLoading(true);
    try {
      const fetchedBlock = await web3.eth.getBlock(blockNumber!);
      setBlock(fetchedBlock);
    } catch (error) {
      console.error(`Error fetching block: ${error}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>블록 정보</h1>
      <input
        type="number"
        placeholder="Block number"
        onChange={(e) => setBlockNumber(parseInt(e.target.value))}
      />
      <button onClick={fetchBlock} disabled={!blockNumber || loading}>
        블록 확인
      </button>
      {loading && <p>Loading...</p>}
      {block && (
  <pre>
    <code>
      {JSON.stringify(
        {
          ...block,
          logsBloom: undefined,
        },
        null,
        2
      )}
    </code>
  </pre>
)}  
    </div>
  );
};

export default BlockInfo;
