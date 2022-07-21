import React, { useState } from "react";
import styled from "styled-components";
import { GrFormClose as CloseIcon } from "react-icons/gr";
import {
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineReload as ReloadIcon,
} from "react-icons/ai";

const StyledSearch = styled.div``;

interface ISearch {
  handleSetSearchedCity: (cityName: string) => void;
  handleReload: () => void;
}

const Search: React.FC<ISearch> = ({
  handleSetSearchedCity,
  handleReload,
}: ISearch): JSX.Element => {
  const [inputValue, setInputValue] = useState("Warsaw,PL");
  const [errors, setErrors] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const errorsEmpty = errors?.length === 0;

  const handleOnClick = (): void => {
    if (errorsEmpty) {
      handleSetSearchedCity(inputValue);
    } else {
      setDisabled((prev) => !prev);
    }
  };

  const validation = () => {
    switch (true) {
      case !inputValue.includes(","):
        return [
          ...errors,
          "City name and coutry code have to be seperated with a coma",
        ];
      default:
        return errors;
    }
  };

  const clearInput = (): void => {
    setInputValue("");
  };

  const handleReloadClick = (): void => {
    if (errorsEmpty) {
      handleSetSearchedCity(inputValue);
      handleReload();
    }
  };

  return (
    <StyledSearch className="Search">
      <label htmlFor="search">City name</label>
      <a
        href="https://countrycode.org/"
        target="_blank"
        rel="nnoopener noreferrer"
      >
        <InfoIcon />
        Check the country code
      </a>
      <CloseIcon onClick={clearInput} />
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="City name and 2 digits country code (alpha-2)"
        onBlur={validation}
        autoComplete="false"
      />
      {errors.length > 0 && (
        <>
          {errors.map((error) => (
            <span className="error">{error}</span>
          ))}
        </>
      )}

      <button onClick={handleOnClick} disabled={isDisabled}>
        search
      </button>
      <ReloadIcon onClick={handleReloadClick} className="reload-icon" />
      <p>
        Popular locations:
        <span>Warsaw, PL</span>
        <span>Wrocław, PL</span>
        <span>London, EN</span>
        <span>Madrid, ES</span>
        <span>Rome, IT</span>
      </p>
    </StyledSearch>
  );
};

export default Search;
