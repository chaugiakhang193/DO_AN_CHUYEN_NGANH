import React, { useState } from "react";

export const Forgot= (props) => {
    const [Email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
      }

    return (
        <div className="auth-form-containers">
        <form className="forgot-form" onSubmit={handleSubmit}>
            <label htmlFor="Forgot Username or Password">Email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="20521111@gm.uit.edu.vn" id="Email" name="Email"></input>

            <button>Send code for email</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account?</button>
        </div>
    );
}
