import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import logo from '../assets/img/Logo.jpg';
import google from '../assets/img/icons8-google.svg';
import vk from '../assets/img/icons8-vk-в-круге.svg';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


function Main() {
    return (
        <>
            <Global></Global>
            <Container>
                <Logo>
                    <Link to = "/" className="container_logo">
                        <img className="img_logo" src={logo} alt="logo"></img>
                    </Link>
                </Logo>
                <H1 className="main_title">Войдите в ваш аккаунт</H1>

                <MainForm className="main_form">
                    <FormInner className="form-inner">
                        <Input type="email" placeholder="Введите электронную почту"></Input>
                        <Input type="password" placeholder="Введите пароль"></Input>
                    </FormInner>
            
                    <ContainerSocial className='container_social'>
                        <Link to = "/ForgotPass" className="forgot_pass">Забыли пароль?</Link>
                        
                        <Link to = "#" className="main_but">Войти</Link>
                        
                        <Socials className="socials">
                            <Link className="vk" to = "#">
                                <img src={google} className="socials_img" alt="google"></img>
                            </Link>
                            <Link className="google" to = "#">
                                <img src={vk} className="socials_img" alt="vk"></img>
                            </Link>
                        </Socials>
                    </ContainerSocial>
                </MainForm>
                
                <P className="registration">Впервые на Юри.тех? <Link to = "/NewAcc">Зарегистрироваться</Link></P>
            </Container>
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

        .forgot_pass {
            order: 1;
            display: flex;
            margin-top: 10px;
        }

        .socials {
            order: 1;
            justify-content: center
        }

        .registration {
            align-items: center;
            flex-direction: column;
        }

        .registration a {
            margin-top: 8px;
        }

        .form-inner {
            max-width: 90%;
        }

        .container_social {
            max-width: 90%;
            flex-direction: column;
        }

        .main_title {
            display: flex;
            justify-content: center;
            font-size: x-large;
        }
            
    }

    @media (max-width: 370px) {
        .form-inner {
            max-width: 80%;
        }

        .main_but {
            width: 90%;
            max-width: 100%;
        }
    }

    @media (max-width: 321px) {
        .main_title {
            font-size: larger;
        }
    }
`;

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'AvenirNextBold';
    margin-top: 26px;
    color: #416074;
    font-size: 24px;
`;

const Logo = styled.div`
    .container_logo {
        justify-content: center;
        display: flex;
    };

    .img_logo {
        max-height: 90px;
    }
`;

const Container = styled.div`
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

    .forgot_pass  {
        color: #416074;
        min-width: 109px;
        font-size: 14px;
    }
`;

const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Input = styled.input`
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

    .socials_img {
        max-width: 40px;
    }
`;

const P = styled.p`
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
`;