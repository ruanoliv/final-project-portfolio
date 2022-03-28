import React from "react";
import { Wrapper, Content } from "./About.style";
import { AiOutlineLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

export default function About(props) {
    console.log(props.data)
    return (
        <Wrapper>
            <Content>
                <div className="github-card">
                    <ul class="status">
                        <li><strong>{props.data.bioMessage}</strong></li>
                        <li><AiOutlineLinkedin size={20} /><strong></strong></li>
                        <li><GoLocation size={20} /><strong></strong></li>
                        <li><strong></strong></li>
                    </ul>
                </div>
            </Content>
        </Wrapper>
    );
}
