import React, { Component } from 'react';
import '../assets/css/Button.css'
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Main from './main';

const MainBut = styled.a`
    .main_but {
        display: flex;
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        user-select: none;
        outline: none;
        border-radius: 10px;
        transition: 0.4s;
        color: white;
        font-family: 'AvenirNextRegular';
        font-size: 20px;
        background: #428EC0;
    }

    .main_but:hover {
        background: #416074;
    }
`

function Button () {
    return (
        <div>
            <MainBut>
                <Link to = "/Main" className='main_but'>Войти в аккаунт</Link>
            </MainBut>
        </div>
    )
}
  

export default Button;