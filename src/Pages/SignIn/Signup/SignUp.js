import React, { useRef, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../SignIn.css";

export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setSuccess("succesfully created account!")
      setTimeout(function () {
        history("/")
      }, 1000);
    } catch(error) { 
      if (error.code === 'EMAIL_EXISTS') {
        console.log("user already exists")
      }
      setError("Failed to create an account")
    }

    setLoading(true)
  }

  return (
    <div className="auth__parent">
      <div className="auth__container">
        <h2>Create Your Account</h2>
        <div className="auth-error">
          {error && <p>{error}</p>}
          {success && <p className="auth-success">{success}</p>}
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth-input" placeholder="Your E-mail" type="email" ref={emailRef} required/>

          <input className="auth-input" placeholder="Password" type="password" ref={passwordRef} required/>

          <input className="auth-input" placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required/>

          <button className="auth__button button__more-space" disabled={loading} type="submit">
            Create Your Account
          </button>
        </form>

        {/* <div className="auth-bottom">
          <p>Already Have An account?</p>
          <Link to="/sign-in">Log In</Link>
        </div> */}

        <div className="auth__button-secondary">
          <Link to="/sign-in">Sign In</Link>
        </div>

      </div>
    </div>
  );
}
