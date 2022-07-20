import React from "react";
import styled from "styled-components";

const StyledSingleDayTile = styled.div``;

interface ISingleDayTile {}

const SingleDayTile: React.FC<ISingleDayTile> = (): JSX.Element => {
  return <StyledSingleDayTile className="SingleDayTile"></StyledSingleDayTile>;
};

export default SingleDayTile;
