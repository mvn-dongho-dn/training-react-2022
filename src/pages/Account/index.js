import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function Account() {
  const { logout } = useAuth();
  return (
    <div className="container">
      <h1>Account</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
