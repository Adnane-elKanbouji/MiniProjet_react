import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export default function Panier() {
  const Cart=useSelector(state=>state.Cart)
  const dispatch=useDispatch();
  let Totalqte = 0;
  let Totalprice=0;
 
  if(Cart.length !== 0){
    for(let item of Cart){
        Totalqte +=  item.quantity;
     
        Totalprice += item.tarif;
      }
    
    }

  const deletep = (id) => {

    const indexItem = Cart.findIndex(obj => obj.id === id)

    dispatch({
        type: "DELETEITEM",
        payload: indexItem
    })
  }
  const ok=()=>{
      if(Cart.length>0){
        document.getElementById("ok").innerHTML=` <button type="button"  class="Mbtn" >valider l'achat</button>`
      }
  }
  useEffect(() => {
    if (Cart.length > 0) {
      ok();
    }
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
               </span>
               </fieldset>
               ------------------------------------------------------------------------------------  <br />
            </div>
          )
        })}
  
        <h3>TOTAL QUANTITY: {Totalqte} </h3>
        <h3>TOTAL TARIF : {Totalprice} $US</h3>
        <button type="button" className='Mbtn' ><Link id='MyLink' to="/">Comamcer l'achat</Link></button>
        <span id='ok'>
         
        </span>
        </div>
       
    </div>
    </center>
  )
}

