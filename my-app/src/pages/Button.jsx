import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Button () {
    return (
        <MainBut>
            <Link to = "/Main">Войти в аккаунт</Link>
        </MainBut>
    )
}
  

export default Button;


const MainBut = styled.div`
    a {
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

    a:hover {
        background: #416074;
    }
`;