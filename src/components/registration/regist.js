
import React from 'react';
import './Register.css';

const Register = ()=>{


  return (
  
<div class="animated bounceInDown">
  <div class="container">
    <span class="error animated tada" id="msg"></span>
    <form name="form1" class="box" onsubmit="return checkStuff()">
      <h4>Register<span>Dashboard</span></h4>
      <h5>Sign up to your account.</h5>
        <input type="text" name="username" placeholder="username" autocomplete="off" />
        <input type="text" name="email" placeholder="email" autocomplete="off" />

        <i class="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off" />
        <label>
          <input type="checkbox" />
          <small class="rmb">Remember me</small>
        </label>
        <a href="#" class="forgetpass">Forget Password?</a>
        <input type="submit" value="Sign up" class="btn1" />
    </form>
        <a href="/login" class="dnthave">Don’t have an account? Sign in</a>
  </div> 
</div>
);
}
export default Register;
