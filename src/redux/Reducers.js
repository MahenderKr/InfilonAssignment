import {GETTING_DATA, GET_DATA} from './types';
const initialState={
    people:[],
    loading:false
}
const getDataReducer=(state=initialState,{type,payload})=>{
    
switch(type)
{
    case GET_DATA : return {
            people:payload,
            loading:false
        }
   case GETTING_DATA: return{
       ...state,loading:true
   }
    
    default: return state;
       
    
}
}
export default getDataReducer;