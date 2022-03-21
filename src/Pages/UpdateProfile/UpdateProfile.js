import React, { useRef, useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "../SignIn/SignIn.css"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
      <div className="auth__parent">
        <div className="auth__container">
          <h2>Update Profile</h2>
          <div className="auth_error">
            {error && <div >{error}</div>}
          </div>
          <form className="auth__form" onSubmit={handleSubmit}>
              <label className="auth-label">email</label>
              <input className="auth-input" type="email" ref={emailRef} defaultValue={currentUser.email} required/>

              <label className="auth-label">password</label>
              <input className="auth-input" type="password" ref={passwordRef} placeholder="Leave blank to keep the same" required/>
              
              <label className="auth-label">confirm password</label>
              <input className="auth-input" type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" required/>
            <button className="auth__button" disabled={loading} type="submit">
              Update
            </button>
          </form>
        </div>
        <div className="w-100 text-center mt-2">
          <Link to="/">Cancel</Link>
        </div>
      </div>
  );
}
