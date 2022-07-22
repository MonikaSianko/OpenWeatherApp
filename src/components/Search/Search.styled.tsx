import styled from "styled-components";

export const StyledSearch = styled.div`
  margin-top: 60px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.47);
  text-align: center;
  width: 100%;
  .label-and-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    label {
      text-transform: uppercase;
      margin-bottom: 10px;
      margin-right: 20px;
    }
  }
  a > span {
    display: flex;
    align-items: center;
    justify-content: c;
    font-size: 1.2rem;
    font-weight: 100;
    :hover {
      text-decoration: underline;
    }
    svg {
      margin-right: 5px;
      color: #4bc0fa;
    }
  }
  .input-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
  }
  input {
    padding-left: 28px;
    border-radius: 30px;
    height: 40px;
    width: 100%;
    background: #e7e7e7;
    border: 1px solid #ffffff;
    color: #6d6d6d;
    font-weight: 500;
    :focus {
      border: 1px solid #4bc0fa;
      outline: #4bc0fa;
    }
  }
  input ::placeholder {
    font-weight: 300;
    color: #b5b5b5;
  }
  .close-icon {
    position: absolute;
    top: 12px;
    left: 6px;
    width: 20px;
    height: 20px;
    color: #6d6d6d;
    cursor: pointer;
  }
  .btns {
    width: 150px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btns .disabled,
  .search-btn:disabled,
  .reload-btn:disabled {
    background-color: #6d6d6d;
    cursor: not-allowed;
  }
  .search-btn {
    position: absolute;
    right: 2px;
    top: 2px;
    background: linear-gradient(
      270deg,
      #38a3d8 2.22%,
      rgba(13, 124, 177, 0.99) 108.33%
    );
    border: none;
    width: 80px;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    :hover {
      filter: brightness(110%);
    }

    @media (max-width: 400px) {
      margin-top: 10px;
      position: initial;
      width: 100%;
    }
  }

  .popular-locations {
    margin-top: 25px;
    > div {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      span {
        padding: 5px;
      }
    }
  }
`;
