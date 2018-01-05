import { INCREMENT , DECREMENT ,CREATE_TASK ,DELETE_TASK,UPDATE_TASK,VIEW_TASKS }  from "../constants/actions";
export const increment = ()=>({type : INCREMENT})
export const  decrement  = ()=>({type : DECREMENT})
export const  createTask  = ()=>({type : CREATE_TASK})
export const  deleteTask  = ()=>({type : DELETE_TASK})
export const  updateTask  = ()=>({type : UPDATE_TASK})
export const  viewtasks  = ()=>({type : VIEW_TASKS})
