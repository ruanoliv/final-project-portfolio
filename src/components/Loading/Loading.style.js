import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #23212c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  .loading {
    border: 12px solid #fff;
    width: 60px;
    height: 60px;
    border-top: 12px solid #615f73;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
