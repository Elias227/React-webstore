import React, { useRef, useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link } from "react-router-dom"
import "../SignIn/SignIn.css"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
      <div className="auth__parent">
        <div className="auth__container">
          <h2 className="">Reset Password</h2>
          <div className="auth-error">
            {error && <div>{error}</div>}
            {message && <div className="auth-success">{message}</div>}
          </div>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input className="auth-input" type="email" placeholder="Your email" ref={emailRef} />
            <button className="auth__button" disabled={loading} type="submit">
              Reset Password
            </button>
          </form>
          <div className="auth__button-secondary">
            <Link to="/sign-in">Sign In</Link>
          </div>
          <div className="auth__link">
            <p>New customer? <Link to="/sign-up">Create An Account</Link></p>
          </div>
        </div>
      </div>
  )
}

