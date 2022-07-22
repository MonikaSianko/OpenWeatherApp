import React, { useEffect, useMemo, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";
import { MdCloudDone as CloudIcon } from "react-icons/md";
import { AiOutlineReload as ReloadIcon } from "react-icons/ai";
import { IDay, IWheatherData } from "../../App.types";
import {
  getCityDetails,
  getContainerWidth,
  getWheatherInfo,
  isValue,
} from "../../utils/methods";
import Search from "../Search/Search";
import Summary from "../Summary/Summary";
import SingleDayTile from "../SingleDayTile/SingleDayTile";
import { StyledWheatherDisplay } from "./WheatherDisplay.styled";

export interface ICityDetails {
  name: string;
  countryCode: string;
}

const WheatherDisplay = () => {
  const [searchedCity, setSearchedCity] = useState("Warsaw,PL");
  const [cityDetails, setCityDetails] = useState<ICityDetails>({
    name: "Warsaw",
    countryCode: "PL",
  });
  const [wheatherInfo, setWheatherInfo] = useState<IWheatherData | null>(null);
  const [apiError, setApiError] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [containerWidth, setContainerWidth] = useState(200);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getApiDataConfig = {
    cityDetails,
    setIsApiLoading,
    setWheatherInfo,
    setApiError,
  };

  const handleReload = (): void => {
    setReload(true);
  };
  const handleSetSearchedCity = (cityName: string): void => {
    setSearchedCity(cityName);
  };

  const daysToDisplay = wheatherInfo?.days?.slice(0, 5);

  useEffect(() => {
    getCityDetails(searchedCity, setCityDetails, cityDetails);
  }, [searchedCity]);

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

  useEffect(() => {
    setContainerWidth(getContainerWidth(wrapperRef));
  }, []);

  return (
    <StyledWheatherDisplay className="app">
      <div className="wrapper" ref={wrapperRef}>
        {apiError && <h1> API ERROR. TRY AGAIN LATER </h1>}
        <div className="header">
          <span className="logo">
            <CloudIcon /> WheatherOpenApp
          </span>
          <span onClick={handleReload} className="reload-btn">
            <ReloadIcon />
          </span>
        </div>
        <Search
          handleSetSearchedCity={handleSetSearchedCity}
          handleReload={handleReload}
        />
        {isApiLoading && (
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={2}
            strokeWidthSecondary={1}
            color="#2E9ED4"
            secondaryColor="white"
          />
        )}
        {wheatherInfo && daysToDisplay && !isApiLoading && (
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
                  containerWidth={containerWidth}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </StyledWheatherDisplay>
  );
};

export default WheatherDisplay;
