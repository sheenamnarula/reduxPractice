import {createStore} from 'redux' ;

export const counter = (state = 0 , action)=>{
    console.log(action,"action****")
    switch(action.type){
        case "INCREMENT" : return state + 1
        break ;
        case "DECREMENT" : return  state - 1
        break ;
        default :
        return state 
    }
}
let store = createStore(counter) ;
export default store ;