import React, { useState, useRef, useEffect} from "react";

export const Login = (props) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username);
  }

  return (
  <div className="auth-form-containers">
    <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input value={Username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="20521111" id="Username" name="Username"></input>
        <label htmlFor="Password">Password</label>
        <input value={Password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="*******" id="Password" name="Password"></input>
        <button>Log In</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('Forgot')}>Forgot Password?</button>
  </div>
  );
}

