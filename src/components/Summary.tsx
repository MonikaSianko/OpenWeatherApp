import React from "react";
import styled from "styled-components";

const StyledSummary = styled.div``;

interface ISummary {}

const Summary: React.FC<ISummary> = (): JSX.Element => {
  return <StyledSummary className="Summary"></StyledSummary>;
};

export default Summary;
