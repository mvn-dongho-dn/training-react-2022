import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="container"> 
      <h1>Login page</h1>
      <button onClick={() => login('dong@gmail.com', 'abcd')}>Login</button>
      <Link to="/auth/register">Register</Link>
    </div>
  )
}
