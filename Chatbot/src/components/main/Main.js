import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Main.css";



function Main(props) {
    return (
        <div className="App">
            <div id="container">
                <div id="welcome">
                    <strong>Welcome</strong>
                </div>
                <div id="logo">
                    <img src={logo} className="main-page-logo" alt="logo" />
                </div>
                <div id="company">
                    <strong>Gup Shup - Chat Application</strong>
                </div>

                <div className="command">
                    <button className='btn btn-secondary'>
                        <Link className="nav-link" to="/login">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;
