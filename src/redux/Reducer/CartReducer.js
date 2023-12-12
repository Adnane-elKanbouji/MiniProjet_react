import React from 'react'

const INITIAL_STATE={
    Cart:[],
    id:0,
    Persone:[
        {
            Adresse: "hay Bouhout 03 rue 114 N 8",
            Email: "Adnane@gmail.com",
            Nom: "EL KANBOUJI",
            Prenom: "ADNANE",
            psword: "123",
        }
    ],
    
};

export default function CartReducer(state=INITIAL_STATE,action) {
    switch(action.type){
        case "ADDITEM":
            const indexItemAdd=state.Cart.findIndex(
            
               
               (obj)=>{
                return obj.id==action.payload.id && obj.Categorie == action.payload.Categorie && obj.place==action.payload.place  ;console.log(obj.id,action.payload.id,obj.Categorie,action.payload.Categorie,obj.place,action.payload.place) }

                
            );
        console.log(indexItemAdd)
            if(indexItemAdd !== -1){
                const updatedQuantity={
                    ...state.Cart[indexItemAdd],
                    quantity:state.Cart[indexItemAdd].quantity+action.payload.quantity

                }
                const newArr=[...state.Cart];
                newArr.splice(indexItemAdd,1,updatedQuantity);
                console.log(newArr)
               return{
                Cart:newArr,
               };
    }else{
        const newArr=[...state.Cart]
          newArr.push(action.payload)
         
          return{
            Cart:newArr,
        }
    }

    case "UPDATEID":
        return{...state,id:action.payload}

    case "UPDATELANG":
        return {...state,Lang:action.payload}
        
    case "DELETEITEM":{
            const indexItemdel = action.payload;
    
            
      
           const newArrC = [...state.Cart];
            newArrC.splice(indexItemdel,1)
            
            return {
              Cart: newArrC,
              
            };
       
          }
    
        
          case "ADDUSER": {
            const user = action.payload;
          
            const newArrUs = [...state.Persone];
            newArrUs.push(user);
          
            return {
              Persone: newArrUs,
            };
          }
       
          
}
 return state;
}
