import React from "react";
import { Wrapper, Content } from "./Tecnologys.style";

export default function Tecnologys(props) {
    console.log(props.techs)
    return (
        <Wrapper>
            <Content>
                OI
                {props.techs.map(tech =>{
                    <div className="tech">Oi {tech[0]}</div>
                })}
            </Content>
        </Wrapper>
    )
}