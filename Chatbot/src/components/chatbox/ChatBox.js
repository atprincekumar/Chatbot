import React, { useEffect, useState, useRef } from "react";
import Constant from "../common/Constant";


import "./ChatBox.css";
import { useLocalStorage } from "../common/useLocalStorage";

const ChatBox = (props) => {
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState({})
    const [users, setUsers] = useState([]);
    let temp = [];

    const loggedInUser = async (event) => {
        //event.preventDefault();

        try {
            let uri = Constant.getLoggedInUsersPath();

            await fetch(uri, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((response) => {
                    if (response.status) {
                        console.log("Login::response ", response);
                        response.record.forEach((element, index) => {
                            temp[index] = element.dname;

                        });
                        setUsers(temp);
                        console.log("array size =", temp.length);

                    } else {
                        console.log("Hold to checkbox Page!", response);
                    }
                    setData(response);
                    console.log("users ", users);

                });
        } catch (exception) {
            console.log("Exception while Login ", exception);
            throw new Error("Internal Server error");
        }
    }

    useEffect(() => {
        console.log("This is test cat...");
        // window.addEventListener('onload', loggedInUser());
        loggedInUser();
        console.log("Response data ", data);


    }, []);




    return (
        <div className="container msg-container">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <div id="plist" className="people-list">
                            <div className="input-group">
                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                                <input type="text" className="form-control" placeholder="Search..." />
                            </div>

                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                {temp.forEach((item) => {

                                    <li>{item}</li>
                                })}

                            </ul>
                        </div>
                        {/* Chat section */}
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="" data-toggle="modal" data-target="#view_info">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        </a>
                                        <div className="chat-about">
                                            <h6 className="m-b-0">Aiden Chavez</h6>
                                            <small>Last seen: 2 hours ago</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/** chat history */}
                            <div className="chat-history">
                                <ul className="m-b-0">
                                    <li className="clearfix">
                                        <div className="message-data text-right float-right">
                                            <span className="message-data-time">10:10 AM, Today</span>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                        </div>
                                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="message-data">
                                            <span className="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div className="message my-message">Are we meeting today?</div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="message-data">
                                            <span className="message-data-time">10:15 AM, Today</span>
                                        </div>
                                        <div className="message my-message">Project has been already finished and I have results to show you.</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="chat-message clearfix">
                                <div className="input-group mb-0">
                                    <span className="input-group-text"><i className="fa fa-send"></i></span>
                                    <input type="text" className="form-control" placeholder="Enter text here..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
