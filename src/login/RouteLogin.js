import React from 'react'
import { Link } from 'react-router-dom'

export default function RouteLogin() {
  return (
    <div>
        <center>
       <Link style={{fontFamily:"sans-serif",fontSize:"1.5em",color:"#ef8f00",padding:"1%"}} to="/Login">Deja un compte</Link>
      <Link style={{fontFamily:"sans-serif",fontSize:"1.5em",color:"#ef8f00",padding:"1%"}} to="/signup">Pas de compte</Link>
      </center>
    </div>
  )
}
