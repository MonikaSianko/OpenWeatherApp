import styled from "styled-components";
import { IStyledSingleTile } from "./SingleDayTile";

export const StyledSingleDayTile = styled.div<IStyledSingleTile>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.47);
  h1 {
    font-size: 2.4rem;
  }
  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 22px;
  }
  .humidity {
    b {
      padding: 0 5px;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
  .temp-by-hour {
    border-top: 1px dotted rgba(255, 255, 255, 0.3);
    margin-top: 22px;
    padding: 22px 0;
    width: ${({ containerWidth }): string => `${containerWidth}px`};
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
    }
    .single-hour {
      display: flex;
      flex-direction: column;
      padding-right: 30px;
      svg {
        margin: 1.5rem 0;
        height: 40px;
        width: auto;
      }
      .temp {
        font-size: 2rem;
      }
    }
  }
`;
