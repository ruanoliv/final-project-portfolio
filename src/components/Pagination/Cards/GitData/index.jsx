import React from "react";
import { Wrapper, Content } from "./GitData.style";

export default function GitData(props) {
    console.log(props.content)
    return (
        <Wrapper>
            <Content>
                <div className="github-card">
                    <ul class="status">
                        <li><a href={`https://github.com/${props.content.login}?tab=repositories`} target="_top">Repositórios: <strong>{props.content.public_repos}</strong></a></li>
                        <li><a href={`https://gist.github.com/${props.content.login}`} target="_top">Gists: <strong>{props.content.public_gists}</strong></a></li>
                        <li><a href={`https://github.com/${props.content.login}/followers`} target="_top">Seguidores: <strong>{props.content.followers}</strong></a></li>
                        <li>Github bio: <strong>{props.content.bio}</strong></li>
                    </ul>
                </div>
            </Content>
        </Wrapper>
    )
}