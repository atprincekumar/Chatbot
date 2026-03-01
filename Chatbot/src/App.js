import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import { Routes, Route } from 'react-router';
import Login from './components/login/Login';
import Registration from './components/register/Registration';
import ForgetPass from "./components/forget/ForgetPass";
import ChatBox from "./components/chatbox/ChatBox";
import { useLocalStorage } from './components/common/useLocalStorage';
import "bootstrap"
import './App.css';

function App() {
  const [loggedIn] = useLocalStorage("loggedIn", false);

  
  console.log("Logged in status ", loggedIn);

  return (
    <div id="appContainer" className="d-flex flex-column min-vh-100">
      <Header title="Chatroom" subtitle="Lets connect" />
      <Routes path="/">
        {loggedIn ? (
          <Route path="*" element={<ChatBox />} />
        ) : (
          <Route path="*" element={<Main />} />
        )}

        <Route path="home" element={<Main />} />
        <Route path="chatroom" element={<ChatBox />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<Registration />} />
        <Route path="forget" element={<ForgetPass />} />
      </Routes>
      <Footer note="Footer note" />
    </div>
  );


}

export default App;
