import React from "react";
import styled from "styled-components";
import { IHours } from "../App.types";
import { celcius, getCelcius, getDayName } from "../utils/helpers";

const StyledSingleDayTile = styled.div``;

interface ISingleDayTile {
  humidity: number;
  date: string;
  hours: IHours[];
}

const SingleDayTile: React.FC<ISingleDayTile> = ({
  humidity,
  date,
  hours,
}: ISingleDayTile): JSX.Element => {
  return (
    <StyledSingleDayTile className="SingleDayTile">
      <div>
        <h1>{getDayName(date)}</h1>
        <h2>{date}</h2>
        <span>{`${humidity} %`}</span>
        <div className="temp-by-hour">
          {hours?.map((hour: IHours) => (
            <div className="single-hour" key={hour.datetime}>
              <span>{hour.datetime}</span>
              <svg>{hour.icon}</svg>
              <span>
                {getCelcius(hour.temp)} {celcius}
              </span>
            </div>
          ))}
        </div>
      </div>
    </StyledSingleDayTile>
  );
};

export default SingleDayTile;
