import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";
import Search from "./components/Search";
import dayjs from "dayjs";
import Summary from "./components/Summary";
import { IDay, IWheatherData } from "./App.types";
import SingleDayTile from "./components/SingleDayTile";
import { isValue } from "./utils/helpers";

const StyledAppContainer = styled.div``;

const App = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [cityDetails, setCityDetails] = useState({
    name: "Warsaw",
    countryCode: "PL",
  });
  const [wheatherInfo, setWheatherInfo] = useState<IWheatherData | null>(null);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const currentDate = dayjs().format("YYYY/M/D");
  const endDate = dayjs().add(5, "day").format("YYYY/M/D");
  const datesRange = `${currentDate}`;

  const handleSetSearchedCity = (cityName: string): void => {
    setSearchedCity(cityName);
  };

  const handleReload = (): void => {
    setReload(true);
  };

  const getCityDetails = (): void => {
    const replacedSpaces = searchedCity.replace(/\s+/g, "");
    const details = replacedSpaces.split(",");
    return setCityDetails({
      ...cityDetails,
      name: details[0],
      countryCode: details[1],
    });
  };

  const getWheatherInfo = async (): Promise<void> => {
    const endpoint =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const url = `${endpoint}${cityDetails.name},${cityDetails.countryCode}?key=${process.env.REACT_APP_API_KEY}`;
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {},
      });
      if (response.status === 200) {
        let data = await response.json();
        setWheatherInfo(data);
        setIsLoading(false);
      } else {
        throw "Error fetching wheather data";
      }
    } catch (error) {
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCityDetails();
  }, [searchedCity]);

  useEffect(() => {
    if (
      isValue(cityDetails.name) &&
      isValue(cityDetails.countryCode) &&
      !reload
    ) {
      getWheatherInfo();
    }
  }, [cityDetails]);

  useEffect(() => {
    if (reload) {
      getCityDetails();
      if (isValue(cityDetails.name) && isValue(cityDetails.countryCode)) {
        getWheatherInfo();
        setReload(false);
      }
    }
  }, [reload]);

  const daysToDisplay = wheatherInfo?.days?.slice(0, 5);
  return (
    <StyledAppContainer className="App">
      {apiError && <h1> API ERROR. TRY AGAIN LATER </h1>}
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
          <div>
            {daysToDisplay?.map((day: IDay) => (
              <SingleDayTile
                key={day.datetime}
                humidity={day.humidity}
                date={day.datetime}
                hours={day.hours}
              />
            ))}
          </div>
        </>
      )}
    </StyledAppContainer>
  );
};

export default App;
