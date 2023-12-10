import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useSelector } from 'react-redux'





export default function Navabar() {
  const Cart=useSelector(state=>state.Cart)
  return (
    <div className='row' id='nava'>
      <div className='col-9'  id='logo_left'>

      <img  style={{float:"left"}} src={process.env.PUBLIC_URL+`Image/logo-en.svg`} alt="" />
    
      <span  className='col-1'  style={{color:"#ef8f00",fontSize:"1.5rem",lineHeight :"1.75rem",fontWeight:"bold",float:"left",borderLeft:"2px solid green",padding:"1%" }}>
BILLETTERIE <br />
OFFICIELLE</span>

</div> <div className='col-3'>
 <nav className='nav-top' >
     
 <Link to="/login" > <img    src={process.env.PUBLIC_URL+`Image/user.svg`} alt="" /></Link>
        <span style={{borderLeft:"2px solid green",height:"40px"}}></span>
        <Link to="/panier" ><img   src={process.env.PUBLIC_URL+`Image/cart.svg`} alt="" /><span style={{color:"white",fontSize:"15px"}}>{Cart.length}</span></Link>
        <span style={{borderLeft:"2px solid green",height:"40px"}}></span>
        <Link to="/" > <img  src={process.env.PUBLIC_URL+`Image/home.svg`} alt="" /></Link>
       
        <span style={{borderLeft:"2px solid green",height:"40px"}}></span>
        <Link  to="/" > <img   style={{color:"white",width:"30%"}} src={process.env.PUBLIC_URL+`Image/globe.svg`}  alt="" /></Link>
  
    </nav>
    </div>
  </div>      
  )
}
