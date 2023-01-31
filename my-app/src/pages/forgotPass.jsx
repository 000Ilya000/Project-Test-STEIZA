import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'


function ForgotPass() {
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
                    <H1 className="main_title">Восстановление пароля</H1>
                    

                    <Form action="" className="main_form">
                        <FormInner className="form-inner">
                            <Input type="email" placeholder="Ваша почта"></Input>
                        </FormInner>

                        <Link to = "#" className="main_but">Отправить пароль на почту</Link>
                    </Form>

                    <Link to = "/Main" className="logIn" >Войти</Link>
                
                    <P className="regist">Еще не с нами?<Link to = "/NewAcc">Зарегистрируйтесь</Link></P>
                </Container>
            </MainSection>
        </>
    )
}


export default ForgotPass;


const Global = createGlobalStyle`
    html {
        min-width:350px
    }

    p, a{
        font-family: 'AvenirNextRegular';
        text-decoration: none;
    };

    @media (max-width: 450px) {
        .regist {
            flex-direction: column;
            align-items: center;
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

    .logIn {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        color: #416074;
        font-family: 'AvenirNextRegular';
        font-size: 14px;
    }
`;

const Form = styled.form`
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
    font-size: 24px;
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