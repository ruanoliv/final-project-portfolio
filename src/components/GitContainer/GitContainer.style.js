import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  .container {
    width: 200px;
    height: 100px;
    background-color: #392f3d;
    border: 1px solid #23212c;
    box-shadow: 1px 1px #23212c;
    border-radius: 10px;
    color: #615f73;
}
.container .repoName{
    color: #615f73;
    text-align: center;
    margin: 10px 0 0 0;
  }
  .container .language{
    width: 100px;
    heigth: 20px;
    border-radius: 5px; 
    color: #000;
    margin: 10px 0 0 30px;
    text-align: center;
  }

  a{
      text-decoration: none;
  }
`;
