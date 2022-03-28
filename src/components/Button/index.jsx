import React from "react";
import { Wrapper, Content } from "./Button.style";

export default function Button(props) {
    return (
        <Wrapper>
            <Content buttonWidth={props.width} buttonHeight={props.height}>
                <button className="Button" type={props.type || 'button'} onClick={props.clicked}>
                    {props.children}
                </button>
            </Content>
        </Wrapper>
    );
}
