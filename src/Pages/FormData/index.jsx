import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import tecnology from "../../data/tecnology";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import { Wrapper, Content } from "./FormData.style";

export default function FormData() {

    const [userData, setUserdata] = useState({
        github: "",
        linkedin: "",
        bioMessage: "",
        tecnologys:[]
    })
    
    const [disable, setDisable] = useState(true)

    const fillUserData = (e) => {
        setUserdata({
            ...userData,
            [e.target.name]: e.target.value,
        })
        if(userData.github != "" && userData.linkedin != "" && userData.bioMessage != "" && userData.tecnologys != []) {
            setDisable(false)
        }
    }
    const getCheckbox = (e) =>{
        setUserdata({
            ...userData,
            tecnologys: [...userData.tecnologys, {name:(e.target.name)}]
        })
    }

    return (
        <Wrapper>
            <Content>
                <Form>
                    <Input name="github" type="text" placeholder="Link github" changed={fillUserData} />
                    <Input name="linkedin" type="text" placeholder="Link linkedIn" changed={fillUserData} />
                    <p className="title">Tecnologias</p>
                    <div className="Tecnologys">
                        {tecnology.map((tecnolog) => {
                            return (
                                <div key={tecnolog.id}>
                                    <Input
                                        type="checkbox"
                                        width='20px'
                                        height='20px'
                                        value={tecnolog.name}
                                        name={tecnolog.name}
                                        changed={getCheckbox}
                                    />
                                    <label htmlFor={tecnolog.id}> {tecnolog.name} </label>
                                </div>
                            );
                        })}
                    </div>
                    <TextArea name="bioMessage" placeholder="Bio" changed={fillUserData} />
                    
                    <Link to="/home" state={ userData }>
                        <Button type="button" content="Go to portfolio" disable={disable}>Ir para portfolio</Button>
                    </Link>
                </Form>
            </Content>
        </Wrapper>
    );
}
