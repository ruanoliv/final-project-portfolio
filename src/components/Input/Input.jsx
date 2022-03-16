import React from 'react';
import { Wrapper, Content } from './Input.style';

export default function Input(props) {
    console.log(typeof (props.type))
    const nameClass = props.type !== 'checkbox' ? 'Input' : 'InputCheckbox';
    return (
        <Wrapper>
            <Content>
                <input className={nameClass} type={props.type || 'text'} name={props.name} placeholder={props.placeholder} />
            </Content>
        </Wrapper>
    )
}