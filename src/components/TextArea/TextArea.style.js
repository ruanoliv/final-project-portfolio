import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  .TextArea {
    width: 400px;
    height: 110px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
    border-radius: 5px;
    text-align: center;
    resize: none;
  }
`;
