import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export default function Panier() {
  const Cart=useSelector(state=>state.Cart)
  const dispatch=useDispatch();
  let Totalqte = 0;
  let Totalprice=0;
 console.log(Cart);
  if(Cart.length !== 0){
    for(let item of Cart){
        Totalqte +=  item.quantity;
     
        Totalprice += item.tarif;
      }
    
    }

  const deletep = (ids) => {

    const indexItem = Cart.findIndex(obj => obj.id == ids)

    dispatch({
        type: "DELETEITEM",
        payload: indexItem
    })
  }
 
  const ok=()=>{
    if (Cart.length == 0) {
        document.getElementById("ok").style.display = "none"
      }
  }
  useEffect(() => {
    
      ok();
   
  }, [Cart.length]);

  
  return (
    <center>
     <div className='col-10  col-xl-6'>
     
      <h2>RÉCAPITULATIF DE VOTRE ACHAT</h2> 
      <div>Vous avez <span style={{fontWeight:"bold"}}>{Cart.length} </span>  produit dans votre panier  <br /><br />
      
        {Cart.map((Item)=>{
          return (
            <div>
              <fieldset class="border p-3">
                <span style={{fontSize:"1.3em"}}>
               ÉVÉNEMENT :  {Item.Equipe1} vs {Item.Equipe2} <br />
               Catégorie :  {Item.Categorie} <br /> Zone : {Item.place} <br /> Siège : AA-2  Quantité :{Item.quantity} <br />
               Plein tarif : {Item.tarif} $US <br />
               <img className='col-3 col-xl-1' onClick={e => deletep(Item.id)} src={process.env.PUBLIC_URL+`/Image/delete.svg`} alt="" />
               
               </span>
               </fieldset>
               ------------------------------------------------------------------------------------  <br />
            </div>
            
          )
        })}
  
        <h3>TOTAL QUANTITY: {Totalqte} </h3>
        <h3>TOTAL TARIF : {Totalprice} $US</h3>
        
        <button type="button"  className='Mbtn m-2' ><Link id='MyLink' to="/">Comamcer l'achat</Link></button>
        <span id='ok' >
        <button type="button"  className="Mbtn m-2" ><Link id="MyLink" to='/payment'>valider l'achat</Link></button>
        </span>
        </div>
       
    </div>
    </center>
  )
}

