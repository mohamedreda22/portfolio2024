import logo from '../Logo1.png';
import React from 'react'
import '../styles/header.css';
export default function Header ()  {

return (
        <div className='header'>
        <img src={logo} alt="Logo" />
        <a href="/skils" >Skils</a>
        <a href='./Projects'>Projects</a>
        <a href="./Achievments">Achievments</a>
        <a href="./ContactMe">Contact Me</a>
        </div>
    )
}