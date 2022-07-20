import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.div``;

interface IDropdown {}

const Dropdown: React.FC<IDropdown> = (): JSX.Element => {
  return <StyledDropdown className="Dropdown"></StyledDropdown>;
};

export default Dropdown;
