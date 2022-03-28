import React from 'react';
import { Wrapper, Content } from './Input.style';

export default function Input(props) {
    const nameClass = props.type !== 'checkbox' ? 'Input' : 'InputCheckbox';
    return (
        <Wrapper>
            <Content>
                <input className={nameClass} type={props.type || 'text'} name={props.name} placeholder={props.placeholder} onChange={props.changed}/>
            </Content>
        </Wrapper>
    )
}