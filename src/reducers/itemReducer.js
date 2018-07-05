import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_LAST, CLEAR} from "../actions/actionTypes"
import * as actions from '../actions/action'

const initialState=[
    {
        index: 0,
        value: 0
    }
]
const reducer = (store =initialState, action) => {
      console.log(action)
    switch(action.type) {
        case INCREMENT:
            console.log(store)
            return[
                ...store.slice(0,action.payload.index),Object.assign({},store[action.payload.index],{value:store[action.payload.index].value +1},...store.slice(action.payload.index+1))
            ]
        case DECREMENT:
            return[
                ...store.slice(0,action.payload.index),Object.assign({},store[action.payload.index],{value:store[action.payload.index].value -1},...store.slice(action.payload.index+1))
            ]
        case ADD_COUNTER:
          return   [...store,{index:store.length,value:0}]
        case REMOVE_LAST:
            return[...store.slice(0,store.length-1)]
        case CLEAR:
            return[
                ...store.slice(0,action.payload.index),Object.assign({},store[action.payload.index],{value:0},...store.slice(action.payload.index+1))
            ]
        default:
            return store;
    }

};
export default reducer