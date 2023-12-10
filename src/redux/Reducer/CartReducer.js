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
            psword: "123"
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

    // case 'UPDATEITEM':
    //     const indexItemUpdate=state.Cart.findIndex(
    //         (obj)=>obj.id===action.payload.id
    //     );
    //     const newArr=[...state.Cart];
    //     newArr.splice(indexItemUpdate,1,action.payload)
    //     return{
    //         Cart:newArr
    //     }
   case "ADDUSER":
       const newArUS=[...state.Persone];
       newArUS.push(action.payload);
       return{
        Persone:newArUS,
       }

}
 return state;
}
