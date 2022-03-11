import React from "react";
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Ínicio</Link>
                </li>
            </ul>
        </nav>
    )
}