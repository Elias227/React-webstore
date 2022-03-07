import React, { useRef, useState } from "react"
import { useAuth } from "../../AuthContext"
import "./SignIn.css";
import { Link, useNavigate } from 'react-router-dom';


function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

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
        <h2>Sign In</h2>
        <div className="auth_error">
          {error && <p>{error}</p>}
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          {/* <label> */}
            <input className="auth-input" placeholder="Your E-mail" type="email" ref={emailRef}/>
          {/* </label> */}

          <input className="auth-input" placeholder="Password" type="password" ref={passwordRef} />

          <button className="auth__button" disabled={loading} type="submit">
            Sign Up
          </button>
        </form>

        <div className="auth-bottom">
          <p>New Customer? Create an Account</p>
          <Link className="auth__button" to="/sign-up">
            Create Your Account
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SignIn
