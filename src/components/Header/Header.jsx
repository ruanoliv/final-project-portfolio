import React from "react";
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { Wrapper, Content } from "./Header.style";

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <nav className="Navigator">
                    <ul className="UList">
                        <li>
                            <Link className="link" to="/"><AiFillHome size={25} /></Link>
                        </li>
                    </ul>
                </nav>
            </Content>
        </Wrapper>
    );
}