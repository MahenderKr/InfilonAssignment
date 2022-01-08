import { GETTING_DATA, GET_DATA , GET_DATA_ERROR} from "./types"
import axios from 'axios'

export const getData=()=>{
  return dispatch => {
    dispatch({
      type: GETTING_DATA
    })
    gettingData(dispatch)
  }
}




async  function gettingData(dispatch){

        const res= await axios.get('https://api.github.com/users')
        dispatch({
            type:GET_DATA,
            payload:res.data
        })
}

