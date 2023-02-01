import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'


function ForgotPass() {
    return (
        <>
            <MainContainer>
                <Logo>
                    <Link to = "/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </Logo>
                <Title>Восстановление пароля</Title>
                <MainForm>
                    <FormInner>
                        <label for="email">Электронная почта</label>
                        <EntryField type="email" placeholder="Ваша почта"/>
                    </FormInner>

                    <Link to = "/" className="main_but">Отправить пароль на почту</Link>
                </MainForm>

                <LogIn>
                    <Link to = "/Main" >Войти</Link>
                </LogIn>
            
                <Regist>Еще не с нами?<Link to = "/NewAcc">Зарегистрируйтесь</Link></Regist>
            </MainContainer>
        </>
    )
}


export default ForgotPass;

const MainContainer = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LogIn = styled.div`
a {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: #416074;
    font-family: 'AvenirNextRegular';
    font-size: 14px;
}
`;

const MainForm = styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .main_but {
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        user-select: none;
        outline: none;
        border-radius: 10px;
        transition: 0.4s;
        color: white;
        font-family: 'AvenirNextRegular';
        font-size: 14px;
        background: #428EC0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main_but:hover {
        background: #416074;
    }
`;

const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
        display:flex;
        display: flex;
        justify-content: center;
        font-family: 'AvenirNextBold';
        color: #416074;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const EntryField = styled.input`
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
    line-height: 50px;
    border-radius: 40px;
    border: 1px solid rgba(65, 66, 67, 0.6);
    font-family: 'AvenirNextRegular', sans-serif;
    outline-color: rgba(66, 142, 192, 0.4);
    caret-color: rgba(66, 142, 192);
`;

const Logo = styled.div`
    a {
        justify-content: center;
        display: flex;
    };

    img {
        max-height: 90px;
    }
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'AvenirNextBold';
    margin-top: 26px;
    color: #416074;
    font-size: 24px;

    @media (max-width: 420px) {
        display: flex;
        justify-content: center;
        font-size: 20px;  
    };
`;

const Regist = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'AvenirNextRegular';
    color: #414243;
    font-size: 14px;
    width: 100%;
    justify-content: space-evenly;

    a{
        color: #416074;
    }

    @media (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
`;