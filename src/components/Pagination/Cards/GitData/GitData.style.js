import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
    max-width: 620px;
    text-align: justify;
    color: #615f73;
    margin: 30px 0px 0px 40px;
    
    ul {
    text-transform: uppercase;
    font-size: 12px;
    color: #707070;
    list-style-type: none;
    padding: 0;
    zoom: 1;
}

ul:after {
    content: '';
    clear: both
}

.status li {
    padding: 8px 0;
}

.status li:last-of-type {
    box-shadow: none
}

.status strong {
    color: #615f73;
    font-size: 16px;
    line-height: 1.6
}

.status a {
    color: #707070;
    text-decoration: none
}

.status a:hover {
    color: #4183c4
}
`;
