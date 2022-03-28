import React from "react";
import { Wrapper, Content } from "./Button.style";

export default function Button(props) {
    return (
        <Wrapper>
            <Content>
                <button style={{width: props.width, height:props.height}} className="Button" type={props.type || 'button'} onClick={props.clicked}>
                    {props.content}
                </button>
            </Content>
        </Wrapper>
    );
}
