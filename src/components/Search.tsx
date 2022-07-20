import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div``;

interface ISearch {}

const Search: React.FC<ISearch> = (): JSX.Element => {
  return <StyledSearch className="Search"></StyledSearch>;
};

export default Search;
