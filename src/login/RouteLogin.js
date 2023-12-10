import React from 'react'
import { Link } from 'react-router-dom'

export default function RouteLogin() {
  return (
    <div>
        <center>
       <Link to="/Login">Deja un compte</Link>
      <Link to="/signup">Pas de compte</Link>
      </center>
    </div>
  )
}
