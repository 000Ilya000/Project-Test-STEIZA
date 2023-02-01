// import logo from './logo.svg';
// import './App.css';
import './assets/Styles/App.css';
import Button from './pages/Button';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/main';
import ForgotPass from './pages/forgotPass';
import NewAcc from './pages/newAcc';
import GlobalStyle from './assets/Styles/GlobalStyle';

function App() {
  return (
  <>
    <GlobalStyle/>
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