import React from "react";
import { Wrapper } from "./Form.style";

export default function Form(props) {
  return (
    <Wrapper>
      <form action="">{props.children}</form>
    </Wrapper>
  );
}
