import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'


function ForgotPass() {
    return (
        <>
            <Global></Global>
            <ForgotPassStyle>
                    <MainSection>
                        <Container className="container">
                            <Link to = "/" className="container_logo">
                                <img className="img_logo" src={logo} alt="logo"></img>
                            </Link>
                            <h1 className="main_title">Восстановление пароля</h1>

                            <Form action="" className="main_form">
                                <FormInner className="form-inner">
                                    <Input type="email" placeholder="Ваша почта"></Input>
                                </FormInner>

                                <Link to = "#" className="main_but">Отправить пароль на почту</Link>
                            </Form>

                            <Link to = "/Main" className="logIn" >Войти</Link>
                        
                            <p className="regist">Еще не с нами?<Link to = "/NewAcc">Зарегистрируйтесь</Link></p>
                        </Container>
                    </MainSection>
            </ForgotPassStyle>
        </>
    )
}


export default ForgotPass;


const Global = createGlobalStyle`
    html {
        min-width:350px
    }
`;

const ForgotPassStyle = styled.div`
    a.text:active,
    a.text:hover, 
    a {
    text-decoration: none;
    }

    .container_logo {
        justify-content: center;
        display: flex;
    }

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
    }

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

    .logIn {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .logIn  {
        color: #416074;
        font-family: 'AvenirNextRegular';
        font-size: 14px;
    }

    .regist {
        display: flex;
        justify-content: center;
        font-family: 'AvenirNextRegular';
        font-size: 14px;
        color: #414243;
        align-items: center;
        width: 100%;
        justify-content: space-evenly;
    }

    .regist a {
        color: #416074;
        font-family: 'AvenirNextRegular';
        font-size: 14px;
    }

    @media (max-width: 450px) {
        .regist {
            flex-direction: column
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

    @media (max-width: 365px) {
        .main_title {
            font-size: larger;
        }
    }

    @media (max-width: 365px) {
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
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    width: 100%;
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