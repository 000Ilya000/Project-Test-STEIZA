import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'

const Global = createGlobalStyle`
    html {
        min-width:350px
    }
`

const ForgotPassStyle = styled.div`

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
    }    

    .container {
        max-width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .main_form {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    a.text:active,
    a.text:hover, 
    a {
    text-decoration: none;
    }

    .container_logo {
        justify-content: center;
        display: flex;
        /* margin-top: 100px; */
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

    .form-inner  {
        /* padding: 50px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .form-inner .last_input {
        margin-bottom: 0;
    }

    .form-inner input {
        /* display: block; */
        width: 100%;
        padding: 0 20px;
        margin-bottom: 20px;
        /* background: #E9EFF6; */
        line-height: 50px;
        /* border-width: 1px; */
        border-radius: 40px;
        border: 1px solid rgba(65, 66, 67, 0.6);
        font-family: 'AvenirNextRegular', sans-serif;
        outline-color: rgba(66, 142, 192, 0.4);
        caret-color: rgba(66, 142, 192);
    }

    /* .container_inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ui-form {
        max-width: 100%;
        padding: 80px 30px 30px;
        margin: 50px auto 30px;
        background: white;
    }
    .ui-form h3 {
        position: relative;
        z-index: 5;
        margin: 0 0 60px;
        text-align: center;
        color: #428EC0;
        font-size: 30px;
        font-weight: normal;
    }
    .ui-form h3:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 60px;
        top: -30px;
        width: 100%;
        height: 100px;
        border-radius: 50%;
        background: #416074;
    }
    .ui-form h3:after {
        content: "";
        position: absolute;
        z-index: -1;
        right: 50px;
        top: -40px;
        width: 0;
        height: 0;
        border-left: 55px solid transparent;
        border-right: 55px solid transparent;
        border-bottom: 90px solid #416074;
    }
    .form-row {
        position: relative;
        margin-bottom: 20px;
        font-family: 'AvenirNextRegular';
        width: -webkit-fill-available;
    }
    .form-row input {
        padding-left: 0px;
        padding-right: 0px;
        display: block;
        width: 100%;
        line-height: 40px;
        font-family: 'AvenirNextRegular', sans-serif;
        background: none;
        border-width: 0;
        border-bottom: 2px solid #428EC0;
        transition: all 0.2s ease;
    }
    .form-row label {
        position: absolute;
        left: 13px;
        color: #B3B3B4;
        font-size: 14px;
        font-weight: 300;
        transform: translateY(-35px);
        transition: all 0.2s ease;
        cursor: text;
    }
    .form-row input:focus {
        outline: 0;
        border-color: #416074;
    }
    .form-row input:focus+label, .form-row input:valid+label {
        transform: translateY(-60px);
        margin-left: -14px;
        font-size: 10px;
        font-weight: 400;
        outline: 0;
        border-color: #416074;
        color: #416074;
        cursor: default;
    }
    .ui-form input[type="submit"] {
        width: 100%;
        padding: 0;
        line-height: 42px;
        background: #428EC0;
        border-width: 0;
        color: white;
        font-size: 20px;
    }
    .ui-form p {
        margin: 0;
        padding-top: 10px;
    } */


    .main_but {
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        /* max-width: 150px; */
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
        /* .main_but {
            padding-right: 80px;
            padding-left: 80px;
        } */

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
        /* .main_but {
            padding-right: 40px;
            padding-left: 40px;
        } */

        .main_title {
            font-size: larger;
        }
    }

    @media (max-width: 365px) {
        /* .main_but {
            padding-right: 40px;
            padding-left: 40px;
        } */

        .main_title {
            font-size: larger;
        }
    }


    /* @media (max-width: 435px) {
        .container_inputs {
            display: flex;
            max-width: fit-content;
            flex-wrap: wrap;
            flex-direction: row;
        }

        h1 {
            font-size: x-large;
        }

        .socials {
            align-items: center;
        }

        .main_but {
            padding: 20px 40px;
        }

        .registration p {
            font-size: 16px;
        }
    }

    @media (max-width: 391px) {
        h1 {
            font-size: x-large;
        }
    }

    @media (max-width: 382px) {
        .main_but {
            padding: 15px 26px;
        }

        h1 {
            font-size: x-large;
        }

        .registration {
            justify-content: space-between;
        }
    }

    @media (max-width: 340px) {
        .main_but {
            padding: 15px 20px;
        }

        .socials {
            align-items: center;
        }
    }

    @media (max-width: 280px) {
        h1 {
            font-size: larger;
        }

        .main_but {
            padding: 15px 10px;
            font-size: large;
        }

        .regist {
            display: flex;
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
        }

        .regist p {
            font-size: 15px;
        }

        .regist a {
            font-size: 15px;
        }
    } */
`
function ForgotPass() {
    return (
        <>
            <Global></Global>
            <ForgotPassStyle>
                <div>
                    <section>
                        <div className="container">
                            <Link to = "/" className="container_logo">
                                <img className="img_logo" src={logo} alt="logo"></img>
                            </Link>
                            <h1 className="main_title">Восстановление пароля</h1>
                        
                            <form action="" className="main_form">
                                <div className="form-inner">
                                    <input type="email" placeholder="Ваша почта"></input>
                                </div>
                            
                                <Link to = "#" className="main_but">Отправить пароль на почту</Link>
                            </form>

                            <Link to = "/Main" className="logIn" >Войти</Link>
                        
                            <p className="regist">Еще не с нами?<Link to = "/NewAcc">Зарегистрируйтесь</Link></p>
                        </div>
                    </section>
                </div>
            </ForgotPassStyle>
        </>
    )
}


export default ForgotPass;