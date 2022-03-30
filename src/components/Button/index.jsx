import React from "react";
import { Wrapper, Content } from "./Button.style";

export default function Button(props) {
    return (
        <Wrapper>
            <Content buttonWidth={props.width} buttonHeight={props.height} buttonColor={props.color}>
                <button className="Button" type={props.type || 'button'} onClick={props.clicked} disabled={props.disable}>
                    {props.children}
                </button>
            </Content>
        </Wrapper>
    );
}
