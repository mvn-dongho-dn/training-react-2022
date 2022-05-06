import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function Auth() {
  return (
    <>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </>
  )
}
