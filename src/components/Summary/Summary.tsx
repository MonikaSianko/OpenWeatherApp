import React from "react";
import { IDay } from "../../App.types";
import { celcius, getCelcius, getMode } from "../../utils/methods";
import { StyledSummary } from "./Summary.styled";

interface ISummary {
  resolvedAddress: string;
  description: string;
  days: IDay[] | [];
}

const Summary: React.FC<ISummary> = ({
  resolvedAddress,
  description,
  days,
}): JSX.Element => {
  const temp = days.map((day) => day.temp);
  const tempSortedIncreasingly = temp?.sort((a, b) => a - b);
  const meanTemp = getCelcius(temp.reduce((a, b) => a + b, 0) / temp.length);
  const lastNum = tempSortedIncreasingly.length - 1;
  const maxTemp = getCelcius(tempSortedIncreasingly[lastNum]);
  const minTemp = getCelcius(tempSortedIncreasingly[0]);
  const modeValue = getMode(temp);
  const modeTemp =
    modeValue.length > 0
      ? modeValue?.map((el) => getCelcius(parseInt(el)))
      : ["not found"];

  return (
    <StyledSummary className="summary">
      <div className="summary-header">
        <h1>{resolvedAddress}</h1>
        <p>{description}</p>
      </div>
      <div className="summary-statistics">
        <div>
          <h3>Mean temperature</h3>
          <span>
            {meanTemp} {celcius}
          </span>
        </div>
        <div>
          <h3>Mode temperature</h3>
          {modeTemp.map((el, index) => (
            <span key={`${el}_${index}`}>
              {el}
              {modeTemp[0] !== "not found" && celcius}
              {modeTemp.length > 1 &&
                modeTemp.indexOf(el) !== modeTemp.length - 1 &&
                `,`}
            </span>
          ))}
        </div>
        <div>
          <h3>Min temperature</h3>
          <span>
            {minTemp} {celcius}
          </span>
        </div>
        <div>
          <h3>Max temperature</h3>
          <span>
            {maxTemp} {celcius}
          </span>
        </div>
      </div>
    </StyledSummary>
  );
};

export default Summary;
