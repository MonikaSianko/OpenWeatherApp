import React, { useState } from "react";
import { MdClose as CloseIcon } from "react-icons/md";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { StyledSearch } from "./Search.styled";

interface ISearch {
  handleSetSearchedCity: (cityName: string) => void;
  handleReload: () => void;
}

const Search: React.FC<ISearch> = ({
  handleSetSearchedCity,
  handleReload,
}: ISearch): JSX.Element => {
  const [inputValue, setInputValue] = useState("Warsaw,PL");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleOnClick = (): void => {
    handleSetSearchedCity(inputValue);
  };

  const clearInput = (): void => {
    setInputValue("");
  };

  const popularLocations = [
    "Warsaw,PL",
    "Rome,IT",
    "Madrid,ES",
    "London,GB",
    "Berlin,DE",
  ];

  return (
    <StyledSearch className="search">
      <div className="label-and-info">
        <label htmlFor="search">TYPE CITY NAME AND COUNTRY CODE</label>
        <a
          href="https://countrycode.org/"
          target="_blank"
          rel="nnoopener noreferrer"
        >
          <span>
            <InfoIcon />
            Check the country code
          </span>
        </a>
      </div>

      <div className="input-wrapper">
        <CloseIcon onClick={clearInput} className="close-icon" />
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="City name and 2 digits code"
          autoComplete="false"
        />

        <button className="search-btn" onClick={handleOnClick}>
          search
        </button>
      </div>
      <div className="popular-locations">
        <h3>Popular locations:</h3>
        <div>
          {popularLocations.map((el, index) => (
            <span key={`${el}_${index}`}>{el}</span>
          ))}
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
