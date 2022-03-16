import React from "react";
import { Wrapper, Content } from "./Button.style";

export default function Button(props) {
    return (
        <Wrapper>
            <Content>
                <button className="Button" type={props.type}>
                    {props.content}
                </button>
            </Content>
        </Wrapper>
    );
}
