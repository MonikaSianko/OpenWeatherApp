import styled from "styled-components";

export const StyledSummary = styled.div`
  text-align: center;
  padding: 25px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.47);
  width: 100%;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 12px;
    padding-bottom: 25px;
  }
  h3 {
    font-size: 14px;
    padding-bottom: 5px;
  }
  span {
    font-size: 20px;
  }
  .summary-statistics {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    > div {
      padding: 10px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;
