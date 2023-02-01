import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'
import google from '../assets/img/icons8-google.svg'
import vk from '../assets/img/icons8-vk-в-круге.svg'



function NewAcc() {
    return (
        <>
            <MainContainer>
                <Logo>
                    <Link to = "/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </Logo>
                <Title>Создайте новый аккаунт</Title>
            
                <MainForm>

                    <FormInner>
                        <label for="email">Электронная почта</label>
                        <EntryField type="email" placeholder="Электронная почта"/>
                        <label for="password">Пароль</label>
                        <EntryField type="password" placeholder="Пароль"/>
                        <EntryField type="password" placeholder="Повторите пароль"/>
                    </FormInner>

                    <AgreeCondit>
                        <InputCheckbox type="checkbox" id="color-1" name="color-1" value="indigo"/>
                        <p>Я согласен с <Link to ="/">Условиями</Link> и <Link to = "/">Политикой Конфиденциальности</Link></p>
                    </AgreeCondit>

                    <ContainerSocial>
                        <ForgotPass>
                        <Link to = "/ForgotPass">Забыли пароль?</Link>
                        </ForgotPass>
                        
                        <Link to = "/" className="main_but">Зарегестрироваться</Link>
                        
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
            
                <LogIn>У вас уже есть аккаунт? <Link to = "/Main">Войти</Link></LogIn>
            </MainContainer>
        </>
    )
}

export default NewAcc;

const MainContainer = styled.div`
    min-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 480px) {
        .main_but {
            width: 100%;
        }
    }

    @media (max-width: 375px) {

        .main_but {
            width: 90%;
        }
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

    @media (max-width: 480px) {
        align-items: center;
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

    input:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 480px) {
        max-width: 90%;
    }

    @media (max-width: 375px) {
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

    @media (max-width: 480px) {
        font-size: 12px;

        p {
            font-size: 12px;
        }
    }

    @media (max-width: 375px) {
        font-size: 11px;

        p {
            font-size: 11px;
        }
    }
`;

const ContainerSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 480px) {
        max-width: 90%;
        flex-direction: column;
    }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    min-width: 109px;
    justify-content: space-between;

    img {
        max-width: 40px;
    }

    @media (max-width: 480px) {
        order: 1;
        justify-content: center
    }
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

    @media (max-width: 480px) {
        display: flex;
        justify-content: center;
        font-size: 20px;
    }
`;

const LogIn = styled.p`
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

    @media (max-width: 480px) {
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

    @media (max-width: 480px) {
        order: 1;
        display: flex;
        margin-top: 10px;
    }
`;