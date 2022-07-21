import dayjs from "dayjs";

export const celcius = <span>&#8451;</span>;

export const getCelcius = (fahrenheit: number): string =>
  (((fahrenheit - 32) * 5) / 9).toFixed(2);

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
