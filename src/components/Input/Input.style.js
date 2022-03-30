import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23212c;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  .Input {
    width: 400px;
    height: 40px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
  .InputCheckbox {
    width: 20px;
    height: 20px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
  }
`;
