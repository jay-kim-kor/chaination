"use client";
import { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3('http://127.0.0.1:8545');

const BlockInfo = () => {
  const [leftBlockNumber, setLeftBlockNumber] = useState<number | null>(null);
  const [rightBlockNumber, setRightBlockNumber] = useState<number | null>(null);
  const [leftBlock, setLeftBlock] = useState<any | null>(null);
  const [rightBlock, setRightBlock] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLeftBlock = async () => {
    setLoading(true);
    try {
      const fetchedBlock = await web3.eth.getBlock(leftBlockNumber!);
      setLeftBlock(fetchedBlock);
    } catch (error) {
      console.error(`블록 조회 오류: ${error}`);
    }
    setLoading(false);
  };

  const fetchRightBlock = async () => {
    setLoading(true);
    try {
      const fetchedBlock = await web3.eth.getBlock(rightBlockNumber!);
      setRightBlock(fetchedBlock);
    } catch (error) {
      console.error(`블록 조회 오류: ${error}`);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* 좌측 블록 */}
      <div className="flex border-8 border-black">
        <h1>좌측 블록</h1>
        <input
          type="number"
          placeholder="블록 번호"
          onChange={(e) => setLeftBlockNumber(parseInt(e.target.value))}
        />
        <button onClick={fetchLeftBlock} disabled={!leftBlockNumber || loading}>
          블록 조회
        </button>
        {loading && <p>Loading...</p>}
        {leftBlock && (
          <pre>
            <code>
              {JSON.stringify(
                {
                  ...leftBlock,
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

      {/* 우측 블록 */}
      <div className="flex border-8 border-black">
        <h1>우측 블록</h1>
        <input
          type="number"
          placeholder="블록 번호"
          onChange={(e) => setRightBlockNumber(parseInt(e.target.value))}
        />
        <button onClick={fetchRightBlock} disabled={!rightBlockNumber || loading}>
          블록 조회
        </button>
        {loading && <p>Loading...</p>}
        {rightBlock && (
          <pre>
            <code>
              {JSON.stringify(
                {
                  ...rightBlock,
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