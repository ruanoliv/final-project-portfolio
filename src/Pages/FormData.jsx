import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import tecnologys from '../data/tecnology'
import Form from '../components/Form/Form'
import { Wrapper } from './FormData.style';

export default function FormData() {
    return (
        <Wrapper>
            <Form>
                <Input type="text" placeholder="Link github" />
                <Input type="text" placeholder="Link linkedIn" />
                <p>Tecnologias</p>
                {
                    tecnologys.map(tecnology => {
                        return (
                            <div key={tecnology.id} className="Tecnologys">
                                <Input type="checkbox" value={tecnology.name} name={tecnology.name} />
                                <label htmlFor={tecnology.id}> {tecnology.name} </ label>
                            </div>
                        )
                    })
                }
                <Link to="/home"><Button type="button" content="Go to portfolio" /></Link>
            </Form>
        </Wrapper>

    )
}