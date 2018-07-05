import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_LAST, CLEAR} from "./actionTypes"

export const increment=(payload)=>({type: INCREMENT,payload})
export const decrement=(payload)=> ({type: DECREMENT,payload})
export const clear=(payload)=> ({type: CLEAR,payload})
export const addCounter=()=>({type: ADD_COUNTER})
export const removeCounter=()=> ({type: REMOVE_LAST})




