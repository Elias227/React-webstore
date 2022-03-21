import React, { useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./Profile.css";

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/sign-in")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="profile">
      <div className="profile__container">
          {error && <p>{error}</p>}
          <p className="profile__email"><strong>Email:</strong> {currentUser.email}</p>
        <div className="profile__links">
          <Link className="update_profile" to="/update-profile">
            Update Profile
          </Link>
          <button className="logout" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
