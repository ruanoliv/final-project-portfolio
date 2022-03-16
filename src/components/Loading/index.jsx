import React from 'react'
import { Wrapper, Content } from './Loading.style'

export default function Loading() {
    return (
        <Wrapper>
            <Content>
                <div className="loading"></div>
            </Content>
        </Wrapper>
    )
}