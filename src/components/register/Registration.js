import React, { useState } from "react";
import "./Registration.css";

import Constant from "../common/Constant";

const Registration = (props) => {

    const [data, setData,] = useState({});
    const [msg, setMsg] = useState();


    const registerUser = async (event) => {
        event.preventDefault();
        try {
            let uri = Constant.getBackendRegisterPath();

            if (!validatePassword(event)) {
                return;
            } 
            console.log("data = ", JSON.stringify(data));
            await fetch(uri, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
                .then((response) => {
                    console.log("Response ", response);
                    if (response.status === "REC") {
                        response.record.forEach(element => {
                            setMsg("User \"" + element.uid + "\" already exists.");
                            event.target.reset();
                        });
                    } else if (response.status === "CREATED") {
                        response.record.forEach(element => {
                            setMsg("User \"" + element.uid + "\" created.");
                        });
                        event.target.reset();
                    }
                });
        } catch (exception) {
            console.error(exception);
            throw new Error("Internal Server error");
        }
    }

    function validatePassword(formEve) {
        let pass = formEve.target.password.value;
        let confPass = formEve.target.confPassword.value;
        if (pass && confPass && pass !== confPass) {
            alert("Password and Confirm password is not equal.");
            return false;
        } else {

        }
        return true;
    }

    return (
        <section className="registration-wrapper">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration border-deco">
                            <div className="card-body p-4">
                                <h3 className="pb-2 pb-md-0 mb-md-5">Registration</h3>
                                <form method="post" onSubmit={registerUser}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" htmlFor="emailAddress">User Id <span className="require">*</span></label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="email" id="emailAddress" name="uid" className="form-control form-control-lg" aria-describedby="inputGroupPrepend" required={true}
                                                        onChange={e => setData({ ...data, uid: e.target.value })} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" htmlFor="displayName">Display Name <span className="require">*</span></label>
                                                <input type="text" id="displayName" name="pname" className="form-control form-control-lg"
                                                    onChange={e => setData({ ...data, dname: e.target.value })} required={true} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                <input type="text" id="firstName" name="fname" className="form-control form-control-lg"
                                                    onChange={e => setData({ ...data, fname: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                <input type="text" id="lastName" name="lname" className="form-control form-control-lg"
                                                    onChange={e => setData({ ...data, lname: e.target.value })} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline datepicker w-100">
                                                <label htmlFor="password" className="form-label">Password<span className="require">*</span></label>
                                                <input type="password" name="password" className="form-control form-control-lg" id="password"
                                                    onChange={e => setData({ ...data, password: e.target.value })} required={true} />                                                    
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="confPassword" className="form-label">Confirm Password<span className="require">*</span></label>
                                            <input type="text" name="confPassword" className="form-control form-control-lg" id="confPassword"
                                                onChange={e => setData({ ...data, confPassword: e.target.value })} required={true} />

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                <input type="tel" id="phoneNumber" name="phone" className="form-control form-control-lg"
                                                    onChange={e => setData({ ...data, phone: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label select-label" htmlFor="phoneType">Phone Type</label>
                                                <br />
                                                <select id="phoneType" className="select form-control-lg" name="ptype" onChange={e => setData({ ...data, ptype: e.target.value })}>
                                                    <option value="option">Phone Type</option>
                                                    <option value="personal">Personal</option>
                                                    <option value="office">Office</option>
                                                    <option value="resident">Resident</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-2 center">
                                        <button data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit">Register</button>
                                    </div>
                                    {(msg != null) ?
                                        (<h4 className="alert alert-danger mt-4" id="statusMsg">{msg}</h4>) :
                                        (<p></p>)
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Registration;