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
            <MainStyle>
                <Container>
                    <Link to = "/" className="container_logo">
                        <img className="img_logo" src={logo} alt="logo"></img>
                    </Link>
                    <h1 className="main_title">Войдите в ваш аккаунт</h1>

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
                                                    
                    <p className="registration">Впервые на Юри.тех? <Link to = "/NewAcc">Зарегистрироваться</Link></p>
                </Container>
            </MainStyle>
        </>
    )
}


export default Main;


const Global = createGlobalStyle`
    html {
        min-width:350px
    }
`;

const MainStyle = styled.div`
    p, a {
        font-size: 14px;
    };

    .container_logo {
        justify-content: center;
        display: flex;
    };

    .img_logo {
        max-height: 90px;
    }

    .main_title {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-family: 'AvenirNextBold';
        margin-top: 26px;
        color: #416074;
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


    a.text:active,
    a.text:hover, 
    a {
    text-decoration: none;
    };

    .p_login {
        color: white;
        font-family: 'AvenirNextRegular';   
        font-size: 14px;
    }

    .forgot_pass {
        font-family: 'AvenirNextRegular';
    }

    .forgot_pass  {
        color: #416074;
        min-width: 109px;
    }

    .login_with {
        margin-right: 10px;
        font-family: 'AvenirNextRegular';
        color: #414243;
    }

    .socials_img {
        max-width: 40px;
    }

    .socials p {
        margin-right: 10px;
        font-family: 'AvenirNextRegular';
        color: #414243;
    }

    .registration {
        display: flex;
        justify-content: center;
        font-family: 'AvenirNextRegular';
        color: #414243;
        font-size: 14px;
        width: 100%;
        justify-content: space-evenly;
    }

    .registration a{
        color: #416074;
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
`;