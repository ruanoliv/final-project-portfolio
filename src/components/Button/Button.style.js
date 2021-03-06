import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 0 0 0;
  `;
  
  export const Content = styled.div`
  .Button {
    width: ${props => props.buttonWidth || "400px"};
    height:  ${props => props.buttonHeight || "45px"};
    background-color: ${props => props.buttonColor || "#392f3d"};
    border-radius: 5px;
    color: #615f73;
    font-size: 15px;
    cursor: pointer;
  }
`;
