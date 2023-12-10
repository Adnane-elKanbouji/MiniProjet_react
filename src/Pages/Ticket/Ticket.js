import React, { useEffect, useState } from 'react';
import "./Ticket.css"
import Match from "../../data/Match";
import Stade from '../../data/Stade';
import Equipe from '../../data/Equipe';
import {Link} from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
export default function Ticket() {

   const Cart=useSelector(state=>state.Cart);
   const Nid=useSelector(state=>state.id)
   const [seletecdStade,SetseletecdStade]=useState("Tous");
   const [seletecdEquipe,SetseletecdEquipe]=useState("Tous");
   const [seletecdEtape,SetseletecdEtape]=useState("Tous");
   const [resultatfiltres,setresultatfiltres]=useState(Match)

   
   const filtrerResultat=()=>{
      const resultatfiltress=Match.filter(data=>{
         return ( seletecdStade==="Tous" || data.Stade === seletecdStade) &&
         (seletecdEquipe=="Tous" || data.Equipe1==seletecdEquipe || data.Equipe2==seletecdEquipe)
         // (seletecdEtape=="Tous" || data.Etape==seletecdEtape)
         
      });
     return setresultatfiltres(resultatfiltress);
   }

  useEffect(()=>{
      filtrerResultat();

   },[seletecdStade,seletecdEtape,seletecdEquipe])
   
   const dispatch = useDispatch()

const ChanegeStade=(name)=>{
   SetseletecdStade(name)
   window.scrollTo({
      top: 650,
      behavior: 'smooth', // Ajoute un effet de défilement fluide
    })
}
   
    const itemAddId=(ids)=>{
      dispatch({
         type:"UPDATEID",
         payload:ids
    
      })
    }

    const [visibleItems, setVisibleItems] = useState(4);

    const handleShowMore = () => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
    };
  
     return (
    
    
     
       <div>
         <div className='row' >
           
   <h1 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >BILLETTERIE COMPETITION</h1>
  <ul  style={{display:'flex',justifyContent:"space-bettwen"}}>
   <li  className='col-4' style={{listStyle:'none'}}>
   <select style={{width:"100%"}} value={seletecdStade} onChange={(e)=>SetseletecdStade(e.target.value)} name="" id="">
   <option  value="Choix de stade" selected hidden>Choix de stade</option>
       {Stade.map((item)=>{
          return <option value={item.name} >{item.name}</option>
       })}
       
   </select>
   </li>
   <li>
   <select style={{width:"100%"}} value={seletecdEquipe}  onChange={(e)=>SetseletecdEquipe(e.target.value)} name="" id="">
   <option  selected hidden>choix d'equipe</option>
       {Equipe.map((item)=>{
          return <option value={item} >{item}</option>
       })}
       
   </select>
   </li>
   <li>
   <select style={{width:"100%"}} name="" id="">
   <option value="" disabled selected hidden>Rtap de competition</option>
       {Stade.map((item)=>{
          return <option >{item.name}</option>
       })}
       
   </select>
   </li>
   </ul>
 
   {resultatfiltres.slice(0, visibleItems).map((item)=>{
     return(
       <div style={{border:"5px solid #004930 ",width:"48%",borderStyle:" none  solid  solid   none ",padding:"0%",margin:"0.9%"}}>
       
          <img src={process.env.PUBLIC_URL+`/Image/Match/${item.image}`} width={"100%"} alt="" />
          <h3>{item.date}</h3>
         <h2 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >{item.Equipe1} VS {item.Equipe2}</h2>
         <h3>Match {item.N}</h3>
        
         <h3> <img src={process.env.PUBLIC_URL+`/Image/place.svg`}  alt="" /> {item.Stade}</h3>
         <button type='button' className='Mbtn' style={{float:"right"}} onClick={(ids)=>itemAddId(item.id)} ><Link to="/Confirmation">Reserver</Link></button>
         
  
          
       </div>
     )
   })}
 {visibleItems < resultatfiltres.length && (
        <button onClick={handleShowMore}>More</button>
      )}
   
   </div>
  
      <div className='row'>
<h1 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >BILLETTERIE ENTRÉE PAR STADE</h1>
{Stade.map((item,index)=>{
  return(
    <div style={{border:"5px solid #ef8f00 ",width:"48%",borderStyle:" none  solid  solid   none ",padding:"0%",margin:"0.9%"}}>
      <img src={process.env.PUBLIC_URL+`/Image/Stade/${item.img}`} width={"100%"}  alt="" />
      <h2 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >{item.name}</h2>
      <button type='button' onClick={(name)=>ChanegeStade(item.name)}  className='Mbtn' >Reseerver</button>
    </div>
  )
})}
</div>
    
       </div>
    
   
     )
    }
    