// import logo from './logo.svg';
// import './App.css';
import './assets/css/App.css';
import Button from './pages/Button';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/main';
import ForgotPass from './pages/forgotPass';
import NewAcc from './pages/newAcc';

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
  <>
    <Global></Global>

    <Router>
      <Routes>
        <Route path="/" element={<Button />}/>
        <Route path="/Main" element={<Main />}/>
        <Route path="/ForgotPass" element={<ForgotPass />}/>
        <Route path="/NewAcc" element={<NewAcc />}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;