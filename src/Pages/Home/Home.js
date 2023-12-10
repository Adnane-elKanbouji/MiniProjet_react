import React from 'react'

import Footer from "../Footer/Footer"
import "./Home.css"
import Ticket from '../Ticket/Ticket'



export default function Home() {
  return (
    <div>
       <br />
      <img width={"100%"} src={process.env.PUBLIC_URL+`Image/header.jpg`} alt="" />
      <br /><br />
      <Ticket/>
 
{/* <div className='row'>
  
{data.map((d)=>{

  return(
    
    <img src={process.env.PUBLIC_URL+`Image/`+d.image} width={"100%"}  alt="" />
    <h3>{d.date}</h3>
    <h2>{d.Equipe1} vs {d.Equipe2}</h2>
    <h4>Match {d.N}</h4>

    </div>
  ) 
})}

    
      
     
    
    </div> */}
   
    </div>
  )
}
