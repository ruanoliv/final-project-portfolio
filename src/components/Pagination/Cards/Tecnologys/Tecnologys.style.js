import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `;
  export const Content = styled.div`
  .allTech{
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 10px;
  }
  .tech {
    margin: 20px 0px 0px 0px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    color: #000;
  }
  
`;
