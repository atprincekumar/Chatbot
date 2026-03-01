import React from "react";
import { Link } from "react-router-dom";
import "./Forget.css"

const ForgetPass = (props) => {

    return (
        <div className="card text-center forget-card">
            <div className="card-header h5 text-white bg-primary">Password Reset</div>
            <div className="card-body px-5 forget-card-body">
                <p className="card-text py-2">
                    Enter your email address and we'll send you an email with instructions to reset your password.
                </p>
                
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-envelope"></span>
                    <input type="email" name="email" id="email" placeholder="Type email" />
                </div>
                <Link href="/forget" data-mdb-ripple-init className="btn btn-primary w-100">Reset password</Link>
                <div className="d-flex justify-content-between mt-4">
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/registration">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPass;