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
        document.getElementById("ok").innerHTML=" <button type=`button`>valider l'achat</button>"
      }
  }
  useEffect(() => {
    if (Cart.length > 0) {
      ok();
    }
  }, [Cart.length]);
  return (
    <div>
      <h1>RÉCAPITULATIF DE VOTRE ACHAT</h1>
      <div>Vous avez  {Cart.length} produit dans votre panier
      
        {Cart.map((Item)=>{
          return (
            <div>
               ÉVÉNEMENT:{Item.Equipe1} vs {Item.Equipe2}
               Catégorie : {Item.Categorie} <br /> Zone : {Item.place} <br /> Siège : AA-2 Quantité :{Item.quantity} <br />
               Plein tarif : {Item.tarif} $US <br />
               ------------------------------------------------------------------------------------  <br />
            </div>
          )
        })}
      ------------------------------------------------------------------------------------  <br />
        <h1>TOTAL QUANTITY: {Totalqte} </h1>
        <h1>TOTAL TARIF : {Totalprice}</h1>
        <button type="button"><Link to="/">Comnce l'achat</Link></button>
        <div id='ok'>
         
        </div>
        </div>
    </div>
  )
}

