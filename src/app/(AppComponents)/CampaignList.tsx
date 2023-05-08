"use client"

import { useState, useEffect } from "react";
import { ICampaignCardProps } from "./CampaignCard";
import CampaignCard from "./CampaignCard";
import SearchBar from "./SearchBar";

interface CampaignListProps {
  campaigns: ICampaignCardProps[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const [searchValue, setSearchValue] = useState("");
  const [beneficiaries, setBeneficiaries] = useState<string[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<ICampaignCardProps[]>(campaigns);

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => { 
    // 캠페인 타이틀을 기준으로 검색값에따라서 렌더링하게 함 
    const newCampaigns = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCampaigns(newCampaigns);
  }, [campaigns, searchValue]);

  useEffect(() => { 
    // 검색값에 따라서 수혜자 주소를 계속 렌더링함 
    // 검색값을 기준으로 렌더링이 바뀌어도 수혜자 값을 배열 순서로 받아 오류 해결 

    const updatedBeneficiaries = filteredCampaigns.map(
      (campaign) => campaign.beneficiary
    );
    setBeneficiaries(updatedBeneficiaries);
  }, [filteredCampaigns]);

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <div className="flex-col justify-center items-center space-y-4">
        {filteredCampaigns.map((campaign: ICampaignCardProps, index: number) => (
          <CampaignCard
            {...campaign}
            key={campaign.id}
            beneficiary={beneficiaries}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default CampaignList;
