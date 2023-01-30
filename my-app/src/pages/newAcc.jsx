import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from '../assets/img/Logo.jpg'
import google from '../assets/img/icons8-google.svg'
import vk from '../assets/img/icons8-vk-в-круге.svg'

const Global = createGlobalStyle`
    html {
        min-width:350px
    }
`

const NewAccStyle = styled.div`
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
    }    

    .container {
        min-width: 350px;
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
        margin-bottom: 40px;
        width: -webkit-fill-available;
        font-family: 'AvenirNextRegular';
    }
    .last_form {
        margin-bottom: 0px;
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


    .custom-checkbox {
        width: 3%;
        margin-left: 0;
        margin-right: 7px;
    }

    .agree-condit {
        display: flex;
        margin-top: 8px;
        justify-content: center;
        margin-bottom: 8px;
    }

    .agree-condit p {
        font-family: 'AvenirNextRegular';   
        font-size: 14px;
        color: #414243;
    }

    .agree-condit a {
        color: #416074;
    }


    a.text:active, /* активная/посещенная ссылка */
    a.text:hover,  /* при наведении */
    a {
    text-decoration: none;
    /* color: #cf2121; */
    }

    /* .container_button {
        display: flex;
        justify-content: center;
    }


    .button {
        display: inline-block;
        font-weight: 700;
        text-decoration: none;
        user-select: none;
        padding: .1em 10em;
        outline: none;
        border-radius: 10px;
        transition: 0.4s;
    }

    .button { background: #428EC0; }
    .button:hover { background: #416074; } */


    .main_but {
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        /* max-width: 80px; */
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

    .p_login {
        color: white;
        font-family: 'AvenirNextRegular';   
        font-size: 14px;
    }


    .socials p {
        margin-right: 10px;
        font-family: 'AvenirNextRegular';
        color: #414243;
    }

    .container_social {
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top: 20px; */
        width: 100%;
        justify-content: space-between;
    }

    .forgot_pass {
        /* margin-right: 60px; */
        font-family: 'AvenirNextRegular';
        font-size: 14px;
        min-width: 109px;
    }

    .forgot_pass  {
        color: #416074;
    }

    .socials {
        display: flex;
        align-items: center;
        font-size: 14px;
        min-width: 109px;
        justify-content: space-between
    }

    .socials_img {
        max-width: 40px;
    }

    .registration {
        display: flex;
        justify-content: center;
        font-family: 'AvenirNextRegular';
        color: #414243;
        font-size: 14px;
        width: 60%;
        justify-content: space-evenly;
    }


    .registration a {
        color: #416074;
    }

    @media (max-width: 480px) {
        .main_but {
            width: 100%;
        }

        .registration {
            align-items: center;
            flex-direction: column;
        }

        .forgot_pass {
            /* font-size: 12px; */
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

        /* .form-inner {
            max-width: 90%;
            align-items: normal
        } */

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
        /* .main_but {
            padding-right: 60px;
            padding-left: 60px;
        } */

        .main_title {
            font-size: larger;
        }
    }
`

function NewAcc() {
    return (
        <>
            <Global></Global>
            <NewAccStyle>
                <wrapper>
                    <section> 
                        <div className="container">
                            <Link to = "/" className="container_logo">
                                <img className="img_logo" src={logo} alt="logo"></img>
                            </Link>
                            <h1 className="main_title">Создайте новый аккаунт</h1>
                        
                            <form action="" className="main_form">
                                <div className="form-inner">
                                    <input type="email" placeholder="Электронная почта"></input>
                                    <input type="password" placeholder="Пароль"></input>
                                    <input className="last_input" type="password" placeholder="Повторите пароль"></input>
                                </div>
                            
                                <div className="agree-condit">
                                    <input className="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"></input>
                                    <p>Я согласен с <Link to ="#">Условиями</Link> и <Link to = "#">Политикой Конфиденциальности</Link></p>
                                </div>

                                <div className="container_social">
                                    <Link to = "/ForgotPass" className="forgot_pass">Забыли пароль?</Link>
                                    {/* <a class="forgot_pass" href="./forgotPass.html">Забыли пароль?</a> */}
                                    
                                    <Link to = "#" className="main_but">Зарегестрироваться</Link>

                                    <div className="socials">
                                        <Link className="vk" to = "#">
                                            <img src={google} className="socials_img" alt="google"></img>
                                        </Link>
                                        <Link className="google" to = "#">
                                            <img src={vk} className="socials_img" alt="vk"></img>
                                        </Link>
                                    </div>
                                </div>
                            
                            </form>
                        
                            <p className="registration">У вас уже есть аккаунт? <Link to = "/Main">Войти</Link></p>
                        </div>
                    </section>
                </wrapper>
            </NewAccStyle>
        </>
    )
}


export default NewAcc;