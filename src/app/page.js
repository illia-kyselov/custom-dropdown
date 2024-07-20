"use client";

import React from "react";
import CustomDropdown from "../components/CustomDropdown";
import { options } from "../data/options";
import ArrowIcon from "../icons/ArrowIcon";

const renderOption = (option) => (
  <div
    className="custom-dropdown__list-item-wrapper"
    style={{ opacity: 1, display: "block" }}
  >
    <div className="custom-dropdown__list-item">{option}</div>
  </div>
);

const renderSelected = (option) => (
  <div className="flex">
    <div className="custom-dropdown__list-selected--item">{option} </div>
    <ArrowIcon />
  </div>
);

const mockSearch = async (term) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return options.filter((option) =>
    option.toLowerCase().includes(term.toLowerCase())
  );
};

const Home = () => (
  <div>
    <CustomDropdown
      options={options}
      renderOption={renderOption}
      renderSelected={renderSelected}
      onSearch={mockSearch}
    />
  </div>
);

export default Home;
