import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import tecnologys from "../../data/tecnology";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import { Wrapper, Content } from "./FormData.style";

export default function FormData() {
    return (
        <Wrapper>
            <Content>
                <Form>
                    <Input type="text" placeholder="Link github" />
                    <Input type="text" placeholder="Link linkedIn" />
                    <p className="title">Tecnologias</p>
                    <div className="Tecnologys">
                        {tecnologys.map((tecnology) => {
                            return (
                                <div key={tecnology.id}>
                                    <Input
                                        type="checkbox"
                                        value={tecnology.name}
                                        name={tecnology.name}
                                    />
                                    <label htmlFor={tecnology.id}> {tecnology.name} </label>
                                </div>
                            );
                        })}
                    </div>
                    <TextArea name="bio" placeholder="Bio"/>
                    <Link to="/home">
                        <Button type="button" content="Go to portfolio" />
                    </Link>
                </Form>
            </Content>
        </Wrapper>
    );
}
