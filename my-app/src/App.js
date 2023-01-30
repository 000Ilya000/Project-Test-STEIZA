import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Main from './pages/main';

const Global = createGlobalStyle`
  body {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

function App() {
  return (
    <div className="App">
        <Global></Global>
        <Button>
        </Button>
    </div>
  );
}

export default App;
