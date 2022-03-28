import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 42rem;
  background-color: #23212c;
  display: flex;
  flex-direction: column;
  `;

export const Content = styled.div`
  width: 100%;
  color: #615f73;
  position: relative;
  
  .UserInformation{
    width: 244px;
    height: 194px;
    margin: 100px;
  }
  .Content{
    width: 688px;
    height: 100%;
    position: absolute;
    top: 100px;
    right: 150px;
  }
`;
