import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Match from '../../data/Match'
import ListeCategorie from '../../data/ListeCategorie';
import { Link } from 'react-router-dom';


export default function Confirmation() {

  const [qte,setqte]=useState(0);
  const [placeName,setplaceName]=useState('E14');
  const [Prix,setPrix]=useState(200)
  const Cart=useSelector(state=>state.Cart);
  const Nid=useSelector(state=>state.id)

  let Totalqte = qte;
  let Totalprice=Prix * qte;
   
 
  
  const updateval=(event)=>{
  setqte(Number(event.target.value));    
  }
 

  const dispatch = useDispatch()

  const addTocart =(ids)=>{
 
    const indexItemAdd = Match.findIndex(
      (obj) => obj.id === ids
    );
  const itemAdded = {
    ...Match[indexItemAdd],
    quantity: qte,
   
    Categorie:Nplace,
    place:placeName,
    tarif:Totalprice
  }
  
  dispatch({
    type: "ADDITEM",
    payload: itemAdded  
  })
  
  
  
   }
  
  
console.log({Cart})


  
 
const listeMatch=Match.filter((Itme)=>{
  return Itme.id==Nid
})



  const handleChange = (event) => {
    
    setNplace(event.target.value);
    console.log(placecategorie)
    setPrix(placecategorie.prix)
  };
  const handlePlceChange = (event) => {
    // Update the state with the selected value
    setplaceName(event.target.value);
  };

  const [Nplace,setNplace]=useState("CATEGORIE 1");
  const placecategorie = ListeCategorie.find((item) => item.name == Nplace );
  const NbrTicket = [1, 2, 3, 4, 5];
  return (
    <div className='row p-3'>
      <div className='col-12'>
     
      {listeMatch.map((Item)=>{
        return  <h1  style={{borderLeft:"5px solid green",padding:"1%"}} >{Item.Equipe1}  VS   {Item.Equipe2} </h1>
      })}
      
      </div>
     <div className='col-12 col-xl-6 '>
      <img  src={process.env.PUBLIC_URL+`/Image/stade3.jpg`} width={"100%"} alt="" />
      </div>
      <div className='col-12 col-xl-5 p-5 mt-2'>
      
      
     
      <ul >
      <li>
   <select  name="" id="" onChange={handleChange} value={Nplace}>

   
       {ListeCategorie.map((item)=>{
          return <option value={item.name}  >{item.name}</option>
       })}
      
     
   
   </select>
   </li>
   <li>
   <select name=""  onChange={handlePlceChange} value={placeName} id="">
   
{placecategorie.place.map((p)=>{
    return  <option value={p} >{p}</option>
})}
      
   </select>
   </li>
   <li>
   <select onChange={updateval} value={qte}>
   <option value="" selected hidden>Choix la Nombre de Ticket</option>
   
       {NbrTicket.map((item)=>{
          return <option value={item} >{item}</option>
       })}
       
   </select>
   </li>
 
   </ul>
   <center className='p-3'>
    <h4>Quantity : {Totalqte}</h4>
   <h4>TOTAL DU PANIER : {Totalprice}</h4><br />
   <button onClick={(id)=>addTocart(Nid)} className='Mbtn' type='button'><Link id='MyLink' to='/panier'>Confermer la commande</Link></button>
   </center>
   </div>
   
      
    </div>
   
  )
}
