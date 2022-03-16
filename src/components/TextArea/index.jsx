import React from "react";
import { Wrapper, Content } from './TextArea.style';

export default function TextArea(props) {
    return (
        <Wrapper>
            <Content>
                <textarea className="TextArea"
                    name={props.name}
                    autocomplete="off"
                    placeholder={props.placeholder || "Your message"}
                ></textarea>
            </Content>
        </Wrapper>
    );
}
