import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #23212c;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  .title {
    margin: 20px 0 0 0;
  }
  .Tecnologys {
    margin: 20px 0 0 0;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 10px;
  }
`;
