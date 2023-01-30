import React, { Component } from 'react';
import '../assets/css/Button.css'
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Main from '../pages/main';

const MainBut = styled.a`
    .main_but {
        display: flex;
        font-weight: 700;
        text-decoration: none;
        padding: 10px 20px;
        user-select: none;
        outline: none;
        border-radius: 10px;
        transition: 0.4s;
        color: white;
        font-family: 'AvenirNextRegular';
        font-size: 20px;
        background: #428EC0;
    }

    .main_but:hover {
        background: #416074;
    }
`
  

class Button extends Component {
    render() {
        return (
            <div>
                <MainBut>
                        <a href="./pages/main.jsx" class="main_but">Войти в аккаунт</a>
                </MainBut>

                {/* <Router>
                    <Route exact path="/" component={Button}/>
                    <Route exact path="/main" component={Main}/>
                </Router> */}
            </div>
        );
    }
}

export default Button;

{/* <Router>
    <Route exact path="/main" component={Main}/>
</Router> */}