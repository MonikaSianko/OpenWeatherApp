import React, { useEffect, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";
import Search from "./components/Search/Search";
import Summary from "./components/Summary/Summary";
import { IDay, IWheatherData } from "./App.types";
import SingleDayTile from "./components/SingleDayTile/SingleDayTile";
import {
  containerWidth,
  getCityDetails,
  getWheatherInfo,
  isValue,
} from "./utils/methods";
import { MdCloudDone as CloudIcon } from "react-icons/md";
import { AiOutlineReload as ReloadIcon } from "react-icons/ai";
import { StyledAppContainer } from "./App.styled";

export interface ICityDetails {
  name: string;
  countryCode: string;
}

const App = () => {
  const [searchedCity, setSearchedCity] = useState("Warsaw,PL");
  const [cityDetails, setCityDetails] = useState<ICityDetails>({
    name: "Warsaw",
    countryCode: "PL",
  });
  const [wheatherInfo, setWheatherInfo] = useState<IWheatherData | null>(null);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getApiDataConfig = {
    cityDetails,
    setIsLoading,
    setWheatherInfo,
    setApiError,
  };

  useEffect(() => {
    getCityDetails(searchedCity, setCityDetails, cityDetails);
  }, [searchedCity]);

  const handleReload = (): void => {
    setReload(true);
  };
  const handleSetSearchedCity = (cityName: string): void => {
    setSearchedCity(cityName);
  };

  useEffect(() => {
    if (
      isValue(cityDetails.name) &&
      isValue(cityDetails.countryCode) &&
      !reload
    ) {
      getWheatherInfo(getApiDataConfig);
    }
  }, [cityDetails]);

  useEffect(() => {
    if (reload) {
      getCityDetails(searchedCity, setCityDetails, cityDetails);
      if (isValue(cityDetails.name) && isValue(cityDetails.countryCode)) {
        getWheatherInfo(getApiDataConfig);
        setReload(false);
      }
    }
  }, [reload]);

  const daysToDisplay = wheatherInfo?.days?.slice(0, 5);

  return (
    <StyledAppContainer className="app">
      <div className="wrapper" ref={wrapperRef}>
        {apiError && <h1> API ERROR. TRY AGAIN LATER </h1>}
        <div className="header">
          <span className="logo">
            <CloudIcon /> WheatherOpenApp
          </span>
          <button onClick={handleReload} className="reload-btn">
            <ReloadIcon />
          </button>
        </div>
        <Search
          handleSetSearchedCity={handleSetSearchedCity}
          handleReload={handleReload}
        />
        {isLoading && (
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white"
          />
        )}
        {wheatherInfo && daysToDisplay && !isLoading && (
          <>
            <Summary
              days={daysToDisplay}
              resolvedAddress={wheatherInfo.resolvedAddress}
              description={wheatherInfo.description}
            />
            <div className="days">
              {daysToDisplay?.map((day: IDay) => (
                <SingleDayTile
                  key={day.datetime}
                  humidity={day.humidity}
                  date={day.datetime}
                  hours={day.hours}
                  containerWidth={containerWidth(wrapperRef)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </StyledAppContainer>
  );
};

export default App;
