import React from "react";
import { Wrapper, Content } from "./Home.style";
import GitPhoto from '../../components/GitPhoto'
import About from '../../components/About'

export default function Home() {
    return (
        <Wrapper>
            <Content>
                <aside className="UserInformation">
                    <GitPhoto />
                    <About />
                </aside>
                <main className="Content">
                    
                </main>
            </Content>
        </Wrapper>
    );
}
