import React from "react";
import { Wrapper, Content } from "./GitPhoto.style";

export default function GitPhoto(props) {
    return (
        <Wrapper>
            <Content>
                <a href={props.data.html_url}>
                    <img src={props.data.avatar_url} className="GitPhoto"/>
                    <div className="Name">{props.data.name}</div>
                </a>
            </Content>
        </Wrapper>
    );
}
