import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import logo from '../assets/img/Logo.jpg';
import google from '../assets/img/icons8-google.svg';
import vk from '../assets/img/icons8-vk-в-круге.svg';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


function Main() {
    return (
        <>
            <Global/>
            <MainContainer>
                <Logo>
                    <Link to = "/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </Logo>
                    <Title>Войдите в ваш аккаунт</Title>
                <MainForm>
                    <FormInner>
                        <EntryField type="email" placeholder="Введите электронную почту"/>
                        <EntryField type="password" placeholder="Введите пароль"/>
                    </FormInner>
            
                    <ContainerSocial>
                        <ForgotPass>
                            <Link to = "/ForgotPass">Забыли пароль?</Link>
                        </ForgotPass>
                        
                        <Link to = "/" className="main_but">Войти</Link>
                        
                        <Socials>
                            <Link to = "/">
                                <img src={google} alt="google"></img>
                            </Link>
                            <Link to = "/">
                                <img src={vk} alt="vk"></img>
                            </Link>
                        </Socials>
                    </ContainerSocial>
                </MainForm>

                <Regist>Впервые на Юри.тех? <Link to = "/NewAcc">Зарегистрироваться</Link></Regist>
            </MainContainer>
        </>
    )
}


export default Main;


const Global = createGlobalStyle`
    html {
        min-width:350px
    }

    p, a{
        font-family: 'AvenirNextRegular';
        text-decoration: none;
    };

    .main_but {
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        max-width: 80px;
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

    @media (max-width: 420px) {
        .main_but {
            width: 100%;
            max-width: 100%;
        }
    }

    @media (max-width: 370px) {
        .main_but {
            width: 90%;
            max-width: 100%;
        }
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

const Logo = styled.div`
    a:first-child {
        justify-content: center;
        display: flex;
    };
    img {
        max-height: 90px;
    }
`;

const MainContainer = styled.div`
    min-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MainForm = styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`;

const ContainerSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 420px) {
        max-width: 90%;
        flex-direction: column;       
    }
`;

const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 420px) {
        max-width: 90%;      
    }

    @media (max-width: 370px) {
        max-width: 80%;
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

const Socials = styled.div`
    display: flex;
    align-items: center;
    min-width: 109px;
    justify-content: space-between;

    img {
        max-width: 40px;
    }

    @media (max-width: 420px) {
        order: 1;
        justify-content: center;
    }
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

    @media (max-width: 420px) {

        align-items: center;
        flex-direction: column;

         a {
            margin-top: 8px;
        }    
    }
`;

const ForgotPass = styled.div`
    a {
        color: #416074;
        min-width: 109px;
        font-size: 14px
    };

    @media (max-width: 420px) {
        order: 1;
        display: flex;
        margin-top: 10px;
    }
`;