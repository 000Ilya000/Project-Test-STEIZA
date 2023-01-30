import React, { Component } from 'react';
import styled from 'styled-components';

const MainCss = styled.div`
    html {
        min-width:350px
    }

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

    p, a {
        font-size: 14px;
    }

    .main_form {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center
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

    /* .container_inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #B3B3B4;
    }

    .ui-form {
        max-width: 350px;
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
        width: 100px;
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
        display: flex;
        align-items: center;
        color: #B3B3B4;
    }
    .form-row input {
        padding-left: 20px;
        padding-right: 0px;
        display: block;
        display: flex;
        width: 100%;
        line-height: 40px;
        font-family: 'AvenirNextRegular', sans-serif;
        background: none;
        border-width: 2px;
        border-radius: 20px;
        border-color: #B3B3B4;  
        border-bottom: 2px solid #428EC0;
        transition: all 0.2s ease;
    }

    .form-row label {
        position: absolute;
        left: 22px;
        color: #B3B3B4;
        font-size: 12px;
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
        transform: translateY(-38px);
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

    .form-inner {
        /* padding: 50px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
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

    /* .form-inner input[type="submit"] {
        margin-top: 30px;
        background: #f69a73;
        border-bottom: 4px solid #d87d56;
        color: white;
        border-color: #416074;
        font-size: 14px;
    } */
    /* .form-inner textarea {
        resize: none;
    } */
    /* .form-inner h3 {
        margin-top: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #707981;
    } */


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
    }

    /* .main_button {
        display: flex;
        justify-content: center;
    }

    .container_button {
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

    .p_login {
        color: white;
        font-family: 'AvenirNextRegular';   
        font-size: 14px;
    }


    .container_social {
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top: 10px; */
        width: 100%;
        justify-content: space-between;
    }

    .forgot_pass {
        /* margin-right: 60px; */
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

    .socials {
        display: flex;
        align-items: center;
        /* width: 100%; */
        min-width: 109px;
        justify-content: space-between;
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
        /* align-items: center;
        flex-direction: column; */
        /* margin-top: 30px; */
        width: 100%;
        justify-content: space-evenly;
    }

    .registration a{
        color: #416074;
        /* margin-top: 10px; */

    }

    @media (max-width: 420px) {
        .main_but {
            width: 100%;
            max-width: 100%;
        }

        .forgot_pass {
            /* font-size: 12px; */
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
        /* .main_but {
            padding-right: 60px;
            padding-left: 60px;
        } */

        .main_title {
            font-size: larger;
        }
    }
`

class Main extends Component {
    render() {
        return (
            <div class="container">
                <a class="container_logo" href="../index.html"><img class="img_logo" src="../assets/img/Logo.jpg" alt="logo"></img></a>
                <h1 class="main_title">Войдите в ваш аккаунт</h1>
            
                <form action="" class="main_form">

                    <div class="form-inner">
                        <input type="email" placeholder="Введите электронную почту"></input>
                        <input type="password" placeholder="Введите пароль"></input>
                    </div>
            
                    <div class="container_social">
                        <a class="forgot_pass" href="./forgotPass.html">Забыли пароль?</a>
                        
                        <a href="#" class="main_but">Войти</a>
                        
                        <div class="socials">
                            <a class="vk" href="#">
                                <img src="../assets/img/icons8-vk-в-круге.svg" class="socials_img" alt="google"></img>
                            </a>
                            <a class="google" href="#">
                                <img src="../assets/img/icons8-google.svg" class="socials_img" alt="vk"></img>
                            </a>
                        </div>
                    </div>
                </form>
            
                <p class="registration">Впервые на Юри.тех? <a href="./newAcc.html">Зарегистрироваться</a></p>
            </div>
        );
    }
}

export default Main;