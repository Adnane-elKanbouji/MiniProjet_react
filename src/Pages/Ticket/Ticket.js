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
      top: 600,
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
       
         <div style={{marginTop:"-5%"}} className='row  p-3' >
            
         <img src={process.env.PUBLIC_URL+`/Image/header.jpg`} alt="" />
          
   <div className='col-12 p-3 mx-auto'>     
   <h1 style={{borderLeft:"10px solid green",float:"left",paddingLeft:"1%"}} >BILLETTERIE COMPETITION</h1>
   </div> 
 
  <div className='col-8 col-xl-4 mx-auto '>

   <select  value={seletecdStade} onChange={(e)=>SetseletecdStade(e.target.value)} name="" id="">
   <option  value="Choix de stade" selected hidden>Choix de stade</option>
       {Stade.map((item)=>{
          return <option value={item.name} >{item.name}</option>
       })}
       
   </select>
   
   </div>
   <div className='col-8 mx-auto col-xl-4   '>
   <select  value={seletecdEquipe}  onChange={(e)=>SetseletecdEquipe(e.target.value)} name="" id="">
   <option  selected hidden>choix d'equipe</option>
       {Equipe.map((item)=>{
          return <option value={item} >{item}</option>
       })}
       
   </select>
   </div>
   <div className='col-8 col-xl-4 mx-auto '>
   <select  name="" id="">
   <option value="" disabled selected hidden>Rtap de competition</option>
       {Stade.map((item)=>{
          return <option >{item.name}</option>
       })}
       
   </select>
  
  </div>
<div className='row p-2 mx-auto m-1 ' >
   {resultatfiltres.slice(0, visibleItems).map((item)=>{
     return(
      
       <div  className="col-10 mx-auto m-3 p-3 col-xl-5" style={{border:"4px solid #004930 ",borderStyle:" solid"}}>
       
          <img src={process.env.PUBLIC_URL+`/Image/Match/${item.image}`} width={"100%"}  alt="" />
          <h5>{item.date}</h5>
         <h3 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >{item.Equipe1} VS {item.Equipe2}</h3>
         <h4>Match {item.N}</h4>
        
         <span> <img src={process.env.PUBLIC_URL+`/Image/place.svg`}  alt="" /> {item.Stade}</span><br />
         <button type='button' className='Mbtn' style={{float:"right"}} onClick={(ids)=>itemAddId(item.id)} ><Link id='MyLink' to="/Confirmation">Reserver</Link></button>
         
    <br />
          
       </div>
     )
   })}
   </div>
 {visibleItems < resultatfiltres.length && (
        <button className='Mbtn mx-auto col-6 col-xl-2'  onClick={handleShowMore}><span id='MyLink'>More</span></button>
      )}
   
   </div>
  
      <div className='row  p-3 '>
<h1 className='col-12 p-3'  style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >BILLETTERIE ENTRÉE PAR STADE</h1>
{Stade.map((item,index)=>{
  return(
    <div  className="col-10 m-3 p-3 mx-auto col-xl-5" style={{border:"4px solid #ef8f00 ",borderStyle:"solid ",padding:"0%",margin:"0.9%"}}>
      <img src={process.env.PUBLIC_URL+`/Image/Stade/${item.img}`} width={"100%"}  alt="" />
      <h5 style={{borderLeft:"5px solid green",paddingLeft:"1%"}} >{item.name}</h5>
      <button type='button' onClick={(name)=>ChanegeStade(item.name)} style={{float:"right"}}  className='Mbtn' ><span id='MyLink' >Reserve</span></button>
    </div>
  )
})}
</div>

       </div>
    
     
     )
    }
    