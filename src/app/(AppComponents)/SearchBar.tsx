"use client";

import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // Emit a custom event with the search value.
    const searchEvent = new CustomEvent("searchValueChange", { detail: event.target.value });
    window.dispatchEvent(searchEvent);
  };

  return (
    <form >
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        className="border border-gray-300 p-2 rounded"
        placeholder="캠페인 검색"
      />
    </form>
  );
};

export default SearchBar;

