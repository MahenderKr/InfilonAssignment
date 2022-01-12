import {DELETE_USER, GETTING_DATA, GET_DATA} from './types';
const initialState={
    people:[],
    loading:true
}
const getDataReducer=(state=initialState,{type,payload})=>{
    console.log(payload);
    
switch(type)
{
    
    case GET_DATA : return {
            people:payload,
            loading:false
        }
   case GETTING_DATA: return{
       ...state,loading:true
   }
    case DELETE_USER :
        return{
            people:payload.users.people.data.filter((person)=>person.id!=payload.id),
            loading:false
        }
    default: return state;
       
    
}
}
export default getDataReducer;