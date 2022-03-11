import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link className="link" to="/"><AiFillHome size={25}/></Link>
                </li>
            </ul>
        </nav>
    )
}