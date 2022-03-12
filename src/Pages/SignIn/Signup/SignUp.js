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

    console.log("test1")

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setLoading(true)
      
      await signup(emailRef.current.value, passwordRef.current.value)
      // console.log(signup)
      // console.log(emailRef)
      // console.log(passwordRef)
      setSuccess("succesfully created account!")

      setTimeout(function () {
        history("/cart")
      }, 1000);

      // console.log("succesfully created account")

    } catch {
      setError("Failed to create an account")
      console.log("failed creating account")
    }

    setLoading(true)
  }

  return (
    <div className="auth__parent">
      <div className="auth__container">
        <h2>Create Your Account</h2>
        <div className="auth_error">
          {error && <p>{error}</p>}
        </div>
        <div className="auth_success">
          {success && <p>{success}</p>}
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

// export default SignUp