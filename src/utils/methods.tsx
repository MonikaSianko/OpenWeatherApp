import React from "react";
import dayjs from "dayjs";
import { ICityDetails } from "../App";
import { IWheatherData } from "../App.types";
import { wheatherIcons } from "./icons";

export const celcius = <span>&#8451;</span>;

export const getCelcius = (fahrenheit: number): string =>
  (((fahrenheit - 32) * 5) / 9).toFixed();

export const getDayName = (date: string): string => {
  return dayjs(date).format("dddd");
};

export const isValue = (value: string): boolean => {
  return value?.length > 0;
};

export const getModeValue = (arr: number[]) => {
  let [maxFreq, result] = [-1, -1];

  arr
    .reduce((prevValue, currValue) => {
      prevValue.set(
        currValue,
        (prevValue.has(currValue) ? prevValue.get(currValue) : 0) + 1
      );
      return prevValue;
    }, new Map())
    .forEach((value, key) => {
      if (value > maxFreq) {
        maxFreq = value;
        result = key;
      }
    });

  return result;
};

const capitalizeFirstLetter = (value: string): string => {
  return value?.charAt(0).toUpperCase() + value.slice(1);
};

const convertIconName = (iconName: string): string => {
  const isNotSingleWord = iconName.includes("-");
  if (isNotSingleWord) {
    const splitedIconName = iconName.split("-");
    const convertedWords = splitedIconName
      .slice(1)
      .map((word) => capitalizeFirstLetter(word));
    const joinedWords = [splitedIconName[0], ...convertedWords].join("");
    return joinedWords;
  } else {
    return iconName;
  }
};

export const renderIcon = (iconName: string): JSX.Element => {
  const convertedIconName = convertIconName(iconName);

  return wheatherIcons[convertedIconName];
};

export const containerWidth = (
  wrapperRef: React.RefObject<HTMLDivElement>
): number => {
  if (wrapperRef?.current) {
    const sidePadding = 90;
    return wrapperRef?.current?.offsetWidth - sidePadding;
  }
  return 200;
};

export const getWheatherInfo = async (config: {
  cityDetails: ICityDetails;
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
  setWheatherInfo: (value: React.SetStateAction<IWheatherData | null>) => void;
  setApiError: (value: React.SetStateAction<boolean>) => void;
}): Promise<void> => {
  const { cityDetails, setIsLoading, setApiError, setWheatherInfo } = config;
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
      setApiError(true);
    }
  } catch (error) {
    setApiError(true);
  } finally {
    setIsLoading(false);
  }
};

export const getCityDetails = (
  searchedCity: string,
  setCityDetails: React.Dispatch<React.SetStateAction<ICityDetails>>,
  cityDetails: ICityDetails
): void => {
  const replacedSpaces = searchedCity.replace(/\s+/g, "");
  const details = replacedSpaces.split(",");
  return setCityDetails({
    ...cityDetails,
    name: details[0],
    countryCode: details[1],
  });
};
