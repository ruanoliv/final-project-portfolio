import React from "react";
import { Wrapper, Content } from "./GitContainers.style";
import GitContainer from "../../../GitContainer";

export default function GitContainers(props) {
    console.log(props.containers);
    return (
        <Wrapper>
            <Content>
                <div className="allContainers">
                    {props.containers.slice(0, 4).map((container) => {
                        return (
                            <GitContainer
                                nameRepo={container.name}
                                gitLink={container.html_url}
                                Language={container.language}
                            />
                        );
                    })}
                </div>
            </Content>
        </Wrapper>
    );
}
