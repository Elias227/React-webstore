import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { auth } from "../../Firebase";

function SignIn() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (event) => {
    event.preventDefault(); // stops page refresh

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // stops page refresh

    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="signin">
      <h2>Sign In</h2>

      <div className="signin__container">
        <form action="">
          <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Your E-mail" type="email" />
          <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" type="password" />

          <button onClick={signin}>Sign In</button>

          <p>New Customer? Create an Account</p>
          <button onClick={register}>Create your Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn
