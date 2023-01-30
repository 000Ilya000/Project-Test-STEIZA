import React, { Component } from 'react';
import '../assets/css/Button.css'

class Button extends Component {
    render() {
        return (
            <div>
                <a href="./pages/main.html" class="main_but">Войти в аккаунт</a>
            </div>
        );
    }
}

export default Button;