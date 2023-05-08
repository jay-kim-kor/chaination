"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface ICampaignCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  goal: number;
  currentAmount: number;
}

const CampaignBar = ({ // 각 캠페인 그래프 표시 컴포넌트 
  goal,
  currentAmount,
}: {
  goal: number;
  currentAmount: number;
}) => {
  const percentage = (currentAmount / goal) * 100;
  const intPercentage = Math.floor(percentage);

  return (
    <div className="bg-gray-200 rounded-full w-full">
      <div
        className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full"
        style={{ width: `${intPercentage}%` }}
      >
        {intPercentage}%
      </div>
    </div>
  );
};

export default function CampaignCard({
  id,
  imageUrl,
  title,
  description,
  goal,
  currentAmount,
  duration,
}: ICampaignCardProps) {
  const [current, setCurrent] = useState(currentAmount); 
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const init = async () => {};
    init();
    const handleSearchValueChange = (event: CustomEvent) => {
      setSearchValue(event.detail);
    };

    window.addEventListener("searchValueChange", handleSearchValueChange); // 검색값 함수

    return () => {
      window.removeEventListener("searchValueChange", handleSearchValueChange); // 검색에 값 없으면 다시 초기로
    };
  }, []); // 

  const titleHighlighted = // 검색칸에 입력시 첫글자 입력값부터를 기준으로 searchValue에 저장 
  searchValue !== "" && title.toLowerCase().includes(searchValue.toLowerCase());

  return (
    <div className="flex-grow w-full md:w-full p-4">
        <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
          <Link href={`/${id}/detailpage`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-85 object-cover"
          />
          <div className="p-4">
            <h2 className={`text-lg font-medium mb-2 ${
              titleHighlighted ? "text-red-500" : ""
            }`}>{title}</h2>
            <p className="text-gray-500 text-sm">{duration}</p>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <CampaignBar goal={goal} currentAmount={current} />
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm">
                목표 모금액: {goal}ETH
              </div>
              <div className="text-gray-500 text-sm">
                {goal - current}ETH 남음
              </div>
            </div>
          </div>
          </Link> 
        </div>
    </div>
  );
}
