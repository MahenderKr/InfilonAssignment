import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getData,fetchData } from '../redux/action';
import './card.css'

function Card() {

    const content = useSelector(state => state); 
  const dispatch = useDispatch();




  useEffect(() => {
     dispatch(getData())
    
  },[])

    return content.loading ? (
    <h2>Loading</h2>
  )  : (
    <div>
      <h2 style={{marginLeft:"550px"}}>Users List</h2>
      <div>
        {content &&
          content.people &&
          content.people.map((user) =>{
              const {id,login,avatar_url,html_url}=user
              return(
                  <ul className='users'>
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <div className='url'>
                                    <a href={html_url}>details</a>
                                </div>
                                
                            </div>
                        </li>
                  </ul>
              )
          })}
      </div>
    </div>
  )
    
}

export default Card
