import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  width: 688px;
  height: 200px;
  display: flex;
  flex-direction: column;
    
  .Pagination {
  }
  .line {
    background-color: #fff;
  }
  .Controls {
    border-top: 2px solid #fff;
    margin: 50px 0 0 0;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 30px;
  }
  .Content {
    width: 688px;
    height: 288px;
    border-radius: 10px;
    background-color: #392f3d;
    display: flex;
  }
`;
