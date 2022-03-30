import React from "react";
import { Wrapper, Content } from "./GitContainer.style";

export default function Repos(props) {
    return (
        <Wrapper>
            <Content>
                <a href={props.gitLink}>
                    <div className="container">
                        <p className="repoName">{props.nameRepo}</p>
                        <p className={`language ${props.Language}`}>{props.Language}</p>
                    </div>
                </a>
            </Content>
        </Wrapper>
    );
}
