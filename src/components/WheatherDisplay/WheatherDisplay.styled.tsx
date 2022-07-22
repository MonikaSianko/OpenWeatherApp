import styled from "styled-components";

export const StyledWheatherDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 15px;
  .wrapper {
    width: 80%;
    max-width: 900px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    filter: drop-shadow(0px 4px 4px rgba(175, 169, 169, 0.67));
    backdrop-filter: blur(8.9px);
    -webkit-backdrop-filter: blur(8.9px);
    border: 1px solid rgba(255, 255, 255, 0.42);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    svg {
      color: white;
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  .reload-btn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      270deg,
      #38a3d8 2.22%,
      rgba(13, 124, 177, 0.99) 108.33%
    );
    border-radius: 30px;
    border: none;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 0;
      color: white;
    }
    :hover {
      filter: brightness(90%);
    }
  }
`;
