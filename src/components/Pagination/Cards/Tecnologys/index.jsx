import React from "react";
import { Wrapper, Content } from "./Tecnologys.style";

export default function Tecnologys(props) {
    console.log(props.techs[0])
    return (
        <Wrapper>
            <Content>
                <div className="allTech">
                {props.techs.map((tech, index) =>{
                  return (
                        <div className={`tech ${tech.name}`} key={index}>{tech.name}</div>
                  )
                })}

                </div>
            </Content>
        </Wrapper>
    )
}