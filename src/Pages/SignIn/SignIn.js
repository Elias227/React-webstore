import React, { useRef, useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link, useNavigate } from 'react-router-dom';
import "./SignIn.css";

export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      setSuccess("success!")
      setTimeout(function () {
        history("/")
      }, 100);
    } catch {
      setError("Failed to sign in")
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
        <div className="auth_success">
          {success && <p>{success}</p>}
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth-input" placeholder="Your E-mail" type="email" ref={emailRef}/>

          <input className="auth-input" placeholder="Password" type="password" ref={passwordRef} />

          <button className="auth__button" disabled={loading} type="submit">
            Sign In
          </button>
          <Link className="forgot__password" to="/forgot-password">
            Forgot Password
          </Link>
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

// export default SignIn
