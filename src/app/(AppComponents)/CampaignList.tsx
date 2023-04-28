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
    const newCampaigns = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCampaigns(newCampaigns);
  }, [campaigns, searchValue]);

  useEffect(() => {
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
