import React, { useState, useEffect } from "react";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

import Constant from "../common/Constant";

import "./Login.css";

const Login = (props) => {
    const [data, setData] = useState({ "status": true });
    const [msg, setMsg] = useState();
    const [logIn, setLogIn] = useState(false);


    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            let uri = Constant.getBackendLoginUri();

            await fetch(uri, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((response) => {
                    if (response.status) {
                        console.log("Login::response ", response);
                        localStorage.setItem("loggedIn", true);
                        localStorage.setItem("person", JSON.stringify(response.record));
                        setLogIn(true);
                    } else {
                        console.log("Hold to login Page!", response);
                        localStorage.clear();
                        setMsg("Credentials not correct for user.");
                        setLogIn(false);
                    }
                });
        } catch (exception) {
            console.log("Exception while Login ", exception);
            throw new Error("Internal Server error");
        }
    }

    useEffect(() => {
        if(logIn){
            window.location.replace("chatroom");
        }
    }, [logIn])


    return (

        <div className="wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-center mt-4 name">
                Login
            </div>
            
            <form className="p-3 mt-3" method="post" onSubmit={formSubmit} >
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-user"></span>
                    <input type="text" name="uid" id="userId" placeholder="Username" required={true}
                        onChange={e => setData({ ...data, uid: e.target.value })} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" required={true}
                        onChange={e => setData({ ...data, password: e.target.value })} />
                </div>
                <button type="submit" className="btn mt-3">Login</button>
                {(msg != null) ?
                    (<h6 className="alert alert-danger mt-4 msg-font" id="statusMsg">{msg}</h6>) :
                    (<p></p>)
                }
            </form>

            <div className="text-center fs-6">
                <Link to="/forget">Forget password?</Link> or <Link to="/registration">Sign up</Link>
            </div>
        </div>
    );

}



export default Login;