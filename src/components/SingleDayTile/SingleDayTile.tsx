import React from "react";
import { IHours } from "../../App.types";
import {
  celcius,
  getCelcius,
  getDayName,
  renderIcon,
} from "../../utils/methods";
import { ImDroplet as HumidityIcon } from "react-icons/im";
import { StyledSingleDayTile } from "./SingleDayTile.styled";

interface ISingleDayTile {
  humidity: number;
  date: string;
  hours: IHours[];
  containerWidth: number;
}

export interface IStyledSingleTile {
  containerWidth: number;
}

const SingleDayTile: React.FC<ISingleDayTile> = ({
  humidity,
  date,
  hours,
  containerWidth,
}: ISingleDayTile): JSX.Element => {
  return (
    <StyledSingleDayTile
      className="SingleDayTile"
      containerWidth={containerWidth}
    >
      <div>
        <h1>{getDayName(date)}</h1>
        <h2>{date}</h2>
        <span className="humidity">
          <HumidityIcon />
          <b>Humidity:</b>
          {`${humidity} %`}
        </span>
        <div className="temp-by-hour">
          {hours?.map((hour: IHours) => (
            <div className="single-hour" key={hour.datetime}>
              <span>{hour.datetime}</span>
              {renderIcon(hour.icon)}
              <span className="temp">
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
