
import React from 'react'
const INITIAL_STATE={  gid:0 }
export default function Reducer_Qte(state=INITIAL_STATE,action) {
    if(action.type=="UPDATE"){
        return{...state,gid:Number(action.payload)}
    }
    
  return state
}
