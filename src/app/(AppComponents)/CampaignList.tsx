"use client";
import { useState } from "react";
import { ICampaignCardProps } from "./CampaignCard";
import CampaignCard from "./CampaignCard";
import SearchBar from "./SearchBar"


interface CampaignListProps {
  campaigns: ICampaignCardProps[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const [searchValue, setSearchValue] = useState("");

  const beneficiaries: string[] = campaigns.map((campaign) => campaign.beneficiary);

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

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
