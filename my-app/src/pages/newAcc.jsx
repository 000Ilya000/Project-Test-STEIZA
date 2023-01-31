import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'
import google from '../assets/img/icons8-google.svg'
import vk from '../assets/img/icons8-vk-в-круге.svg'



function NewAcc() {
    return (
        <>
            <Global></Global>
            <MainSection>
                <Container className="container">
                    <Logo>
                        <Link to = "/" className="container_logo">
                            <img className="img_logo" src={logo} alt="logo"></img>
                        </Link>
                    </Logo>
                    <H1 className="main_title">Создайте новый аккаунт</H1>
                
                    <MainForm className="main_form">

                        <FormInner className="form-inner">
                            <Input type="email" placeholder="Электронная почта"></Input>
                            <Input type="password" placeholder="Пароль"></Input>
                            <Input className="last_input" type="password" placeholder="Повторите пароль"></Input>
                        </FormInner>

                        <AgreeCondit className="agree-condit">
                            <InputCheckbox className="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"></InputCheckbox>
                            <p>Я согласен с <Link to ="#">Условиями</Link> и <Link to = "#">Политикой Конфиденциальности</Link></p>
                        </AgreeCondit>

                        <ContainerSocial className='container_social'>
                            <Link to = "/ForgotPass" className="forgot_pass">Забыли пароль?</Link>
                            
                            <Link to = "#" className="main_but">Зарегестрироваться</Link>
                            
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
                
                    <P className="registration">У вас уже есть аккаунт? <Link to = "/Main">Войти</Link></P>
                </Container>
            </MainSection>
        </>
    )
}

export default NewAcc;


const Global = createGlobalStyle`
    html {
        min-width:350px
    }

    p, a{
        font-family: 'AvenirNextRegular';
        text-decoration: none;
    };

    @media (max-width: 480px) {
        .main_but {
            width: 100%;
        }

        .registration {
            align-items: center;
            flex-direction: column;
        }

        .forgot_pass {
            order: 1;
            display: flex;
            margin-top: 10px;
        }

        .registration a {
            margin-top: 8px;
        }

        .socials {
            order: 1;
            justify-content: center
        }

        .main_form {
            align-items: center;
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

        .main_title {
            display: flex;
            justify-content: center;
            font-size: x-large;
        }

        .agree-condit p {
            font-size: 12px;
        }

        .agree-condit p {
            font-size: 12px;
        }
    }

    @media (max-width: 375px) {
        .agree-condit p {
            font-size: 11px;
        }

        .form-inner {
            max-width: 80%;
        }

        .main_but {
            width: 90%;
        }
    }

    @media (max-width: 321px) {
        .main_title {
            font-size: larger;
        }
    }
`;

const MainSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
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

    .last_input {
        margin-bottom: 0;
    }
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

const InputCheckbox = styled.input`
    width: 3%;
    margin-left: 0;
    margin-right: 7px;
`;

const AgreeCondit = styled.div`
    display: flex;
    margin-top: 8px;
    justify-content: center;
    margin-bottom: 8px;

    p {
        font-family: 'AvenirNextRegular';   
        font-size: 14px;
        color: #414243;
    }

    a {
        color: #416074;
    }
`;

const ContainerSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .forgot_pass {
        font-family: 'AvenirNextRegular';
        font-size: 14px;
        min-width: 109px;
        color: #416074;
    }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    min-width: 109px;
    justify-content: space-between;

    .socials_img {
        max-width: 40px;
    }
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

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'AvenirNextBold';
    margin-top: 26px;
    color: #416074;
`;

const P = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'AvenirNextRegular';
    color: #414243;
    font-size: 14px;
    width: 60%;
    justify-content: space-evenly;

    a{
        color: #416074;
    }
`;