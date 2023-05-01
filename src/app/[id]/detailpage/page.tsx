import React from "react";
import "../../../styles/globals.css"

export default function Page({ 
  params, 
}: {
  params: { id: number };
}) {
    return (
      <>
        <div className="h-80 w-full relative">
            <img src="https://www.ghibli.jp/gallery/umi015.jpg" className="object-cover h-full w-full"/>
            <div className="absolute bottom-0 left-1/3 p-4 text-white">
                <p className="underline decoration-sky-500 font-sans text-3xl">캠페인 제목이 여기에 나타나게 할 것입니다</p>
            </div>
        </div>
        <div className="flex items-center justify-evenly h-20 mx-auto w-3/4 border-b">
            <button className="bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2">캠페인 내용</button>
            <button className="bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2">기부 내역</button>
        </div>
        <div className="flex w-full h-full justify-center">
        <div className="flex items-center justify-evenly w-5/6 h-full pt-8">

          {/* 왼쪽 영역 */}
          <div className="w-3/5 h-[2000px]">
            <div className="flex items-center justify-center w-full h-[64rem] rounded-b-lg shadow-md p-4 bg-red-300 relative">
              <img src="https://www.ghibli.jp/gallery/umi005.jpg" className="w-full h-64 object-cover object-center absolute top-0 left-0"/>
              <p>캠페인 내용을 적을 수 있는 구역</p>
            </div>
          </div>

          {/* 오른쪽 영역 */}
          <div className="relative w-1/4 h-[2000px] border-l flex justify-center">
          <div className="sticky top-24 w-72 h-[28rem] rounded-lg shadow-md p-4 border border-red-300 relative">
            <div className="relative inline-block w-12 h-12">
              <div className="absolute top-0 left-0 bg-red-300 rounded-md w-full h-full flex justify-center items-center">
                <p className="text-white text-center text-sm">D-14</p>
              </div>
            </div>

              <p>기부하기 기능이 들어간 카드에 담겨지는 내용 작성란</p>
              <p className="my-4">캠페인에 후원되어 있는 현재 금액: 1000원</p>
            <div className="w-full bg-gray-200 h-2 rounded-lg relative">
              <div className="bg-red-300 absolute top-0 left-0 h-full rounded-lg" style={{width: "40%"}}></div>
              </div>
                <p className="my-4">목표 금액: 5000원</p>
                <button className="absolute bottom-0 left-0 w-full bg-red-300 hover:bg-red-400 transition duration-500 ease-in-out text-white py-4 rounded-b-lg">기부하기</button>
            </div>
            </div>
        </div>
        </div>
      </>
    );
};