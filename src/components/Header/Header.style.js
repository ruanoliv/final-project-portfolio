import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  .Navigator {
    background-color: #23212c;
    border-bottom: 1px solid #fff;
    width: 100vw;
    height: 9vh;
  }

  .UList {
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: #615f73;
  }
  .link svg {
    margin: 12px 0 0 20px;
  }
  .link:hover {
    color: #fff;
  }
`;
