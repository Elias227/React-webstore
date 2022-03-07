import React, { useRef, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../SignIn.css";

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="auth__parent">
      <div className="auth__container">
        <h2>Create Your Account</h2>
        <div className="auth_error">
          {error && <p>{error}</p>}
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth-input" placeholder="Your E-mail" type="email" ref={emailRef}/>

          <input className="auth-input" placeholder="Password" type="password" ref={passwordRef} />

          <input className="auth-input" placeholder="Confirm Password" type="password" ref={passwordConfirmRef} />

          <button className="auth__button" disabled={loading} type="submit">
            Create Your Account
          </button>
        </form>

        <div className="auth-bottom">
          <p>Already Have An account?</p>
          <Link to="/sign-in">Log In</Link>
        </div>

      </div>
    </div>
  );
}

export default SignUp