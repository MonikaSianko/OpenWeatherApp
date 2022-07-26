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

interface IObj {
  [key: string]: number;
}

export const getMode = (arr: number[]): string[] => {
  let obj: IObj = {};
  arr.forEach((num) => {
    const key = num.toString();
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = +1;
    }
  });
  const values = Object.values(obj);
  const maxValue = Math.max(...values);
  const maxValuesKeys =
    maxValue > 1 ? Object.keys(obj).filter((key) => obj[key] === maxValue) : [];
  return maxValuesKeys;
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

export const getContainerWidth = (
  wrapperRef: React.RefObject<HTMLDivElement>
): number => {
  if (wrapperRef?.current) {
    const sidePadding = 60;
    return wrapperRef?.current?.offsetWidth - sidePadding;
  }
  return 200;
};

export const getWheatherInfo = async (config: {
  cityDetails: ICityDetails;
  setIsApiLoading: (value: React.SetStateAction<boolean>) => void;
  setWheatherInfo: (value: React.SetStateAction<IWheatherData | null>) => void;
  setApiError: (value: React.SetStateAction<boolean>) => void;
}): Promise<void> => {
  const { cityDetails, setIsApiLoading, setApiError, setWheatherInfo } = config;
  const endpoint =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const url = `${endpoint}${cityDetails.name},${cityDetails.countryCode}?key=${process.env.REACT_APP_API_KEY}`;
  setIsApiLoading(true);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (response.status === 200) {
      let data = await response.json();
      setWheatherInfo(data);
      setIsApiLoading(false);
    } else {
      setApiError(true);
    }
  } catch (error) {
    setApiError(true);
  } finally {
    setIsApiLoading(false);
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
