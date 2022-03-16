import React from "react";
import './Form.css'

export default function Form (props){
    return(
        <form className="Form" action="">
            {props.children}
        </form>
    )
}