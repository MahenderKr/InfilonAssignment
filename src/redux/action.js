import { DELETE_USER, GETTING_DATA, GET_DATA , GET_DATA_ERROR} from "./types"
import axios from 'axios'

export const getData=()=>{
  return dispatch => {
    dispatch({
      type: GETTING_DATA
    })
    gettingData(dispatch)
  }
}

export const deleteUser=({content,userId})=>{
  return {
    type:DELETE_USER,
    payload:{users:content,id:userId}
    
  }
}


async  function gettingData(dispatch){

        const res= await axios.get('https://reqres.in/api/users?page=1')
        dispatch({
            type:GET_DATA,
            payload:res.data
        })
}

