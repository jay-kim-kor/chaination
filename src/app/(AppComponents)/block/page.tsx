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
      {/*좌측 블록*/}
      <div className = "flex border-8 border-black">
      <h1>좌측 블록</h1>
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
          mixhash: undefined,
          logsBloom: undefined,
          nonce: undefined,
          sha3Uncles: undefined,
          transactionsRoot: undefined,
          stateroot: undefined,
          receiptsRoot: undefined,
          difficulty: undefined,
          totalDifficulty: undefined,
          extraData: undefined,
          miner: undefined,
        },
        null,
        2
      )}
    </code>
  </pre>
)}  
    </div>
    {/*우측 블록*/}
    <div className = "flex border-8 border-black">
      <h1>우측 블록</h1>
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
          mixhash: undefined,
          logsBloom: undefined,
          nonce: undefined,
          sha3Uncles: undefined,
          transactionsRoot: undefined,
          stateroot: undefined,
          receiptsRoot: undefined,
          difficulty: undefined,
          totalDifficulty: undefined,
          extraData: undefined,
          miner: undefined,
        },
        null,
        2
      )}
    </code>
  </pre>
)}  
    </div>
    </div>
  );
};

export default BlockInfo;
