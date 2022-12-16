
import React from 'react';
import { useNavigate } from "react-router";
// import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";

import './Login.css';
const API_URL = "http://localhost:8000";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const App = () => {
  //   const [data, setData] = useState({
  //     username: "",
  //     password: ""
  //   });

  // }
  const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huIGRvZSIsImlhdCI6MTY3MTE5MzI2OCwibmJmIjoxNjcxMTkzMjY4LCJqdGkiOiJiMTQ4MGEwZS03YTEzLTRjYWUtOWZmZC0xMjllMjVmZTUyOWYiLCJleHAiOjE2NzExOTQxNjgsInR5cGUiOiJhY2Nlc3MiLCJmcmVzaCI6ZmFsc2V9.PJ2su-k82ruGECywUG06SIW1FXc67_gmUXygDsTR2cE'

  //check to see if the fields are not empty
  const login = () => {
    return fetch('httpz://localhost:8080/login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
        },
        body: JSON.stringify({'username': username, 'password': password})
    }).then(data => data.json()).then(navigate('/home'));

  }


  return (

    <div className="animated bounceInDown">
      <div className="container">
        <span className="error animated tada" id="msg"></span>
        <form name="form1" className="box" onSubmit={login}>
          <h4>Login<span>Dashboard</span></h4>
          <h5>Sign in to your account.</h5>
          <input type="text" name="username" placeholder="username" autocomplete="off" onChange={(e) => setUsername(e.target.value)} />
          <i className="typcn typcn-eye" id="eye"></i>
          <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off" onChange={(e) => setPassword(e.target.value)} />
          <label>
            <input type="checkbox" />
            <small className="rmb">Remember me</small>
          </label>
          <a href="#" className="forgetpass">Forget Password?</a>
          <input type="submit" value="Sign in" className="btn1" />
        </form>
        <a href="/signup" className="dnthave">Don’t have an account? Sign up</a>
      </div>
    </div>
  );
}
