import { Button } from 'bootstrap';
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getData,fetchData, deleteUser } from '../redux/action';
import {Modal} from 'react-bootstrap'
import './card.css'
import EditModal from './EditModal';

function Card() {
const [editModalShow,setEditModalShow]=useState(false);
const [deleteModalShow,setDeleteModalShow]=useState(false);
const [saveModalShow,setSaveModalShow]=useState(false);
const [content,setContent]=useState([])
const [isEdit,setIsEdit]=useState(false)

const [singleUser,setSingleUser]=useState();
const[userId, setUserId]=useState(false);
    const users = useSelector(state => state); 
    useEffect(()=>{
      setContent(users)
      console.log(content)
    })
  const dispatch = useDispatch();

const handleClickEdit=(id)=>{
  setUserId(id);
 setEditModalShow(!editModalShow)
  const user=content.people.data.filter((person)=>person.id==id)
    console.log(user)
    setSingleUser(user)
}

const handleClickDelete=(id)=>{
  setUserId(id);
 setDeleteModalShow(!deleteModalShow)
  const user=content.people.data.filter((person)=>person.id==id)
    console.log(user)
    setSingleUser(user)
 
}

const handleClickSave=(id)=>{
  setUserId(id);
  
 setSaveModalShow(!saveModalShow)
  const user=content.people.data.filter((person)=>person.id==id)
    
    setSingleUser(user)
 
}

const handleClickEditClose=(userId)=>{
  setEditModalShow(!editModalShow)
   
 
}
const handleClickDeleteClose=(userId)=>{
  setDeleteModalShow(!deleteModalShow)
  console.log(content);
  dispatch(deleteUser({content,userId}))
 setIsEdit(!isEdit)
}
const handleClickSaveClose=(userId)=>{
   const user=content.people.data.filter((person)=>person.id==userId)
   if (localStorage.getItem(userId) === null) {
      localStorage.setItem(userId,user);
}
else{
  window.alert("already saved")
}
    
  setSaveModalShow(!saveModalShow)

 
}
  useEffect(() => {
     dispatch(getData())
     console.log(content)
  },[])
   


    return content.loading ? (
    <h2>Loading</h2>
  )  : (
    <>
    
    <table className='table table-dark table-hover table-bordered' style={{marginTop:"60px"}}>
      <thead>
        <tr>
   <th scope="col"></th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
        </tr>
      </thead>
       <tbody>
        {isEdit?(
           content.people &&
           
          content.people.map((user) =>{
              const {id,first_name,last_name,email,avatar,}=user
              return(
                <tr key={id}>
                    <td>
                  <img src={avatar}/> 
                 </td>
                    <td >
                      
                   {first_name}
                 </td>
                 <td>
                   {last_name}
                 </td>
                 <td>
                   {email}
                 </td>
                <td>
                  <button className='btn btn-primary' onClick={()=>{handleClickEdit(id)}} >Edit</button>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=>{handleClickDelete(id)}}>Delete</button>
                </td>
                  <td>
                  <button className='btn btn-secondary'onClick={()=>{handleClickSave(id)}}>Save</button>
                </td>
                </tr>
                 
              )
          })
        ):(
          content &&
          content.people &&
          content.people.data.map((user) =>{
              const {id,first_name,last_name,email,avatar,}=user
              return(
                <tr key={id}>
                    <td>
                  <img src={avatar}/> 
                 </td>
                    <td >
                      
                   {first_name}
                 </td>
                 <td>
                   {last_name}
                 </td>
                 <td>
                   {email}
                 </td>
                <td>
                  <button className='btn btn-primary' onClick={()=>{handleClickEdit(id)}} >Edit</button>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=>{handleClickDelete(id)}}>Delete</button>
                </td>
                  <td>
                  <button className='btn btn-secondary'onClick={()=>{handleClickSave(id)}}>Save</button>
                </td>
                </tr>
                 
              )
          })
        ) }
          
       </tbody>
      
    </table>
<Modal show={editModalShow}>
  <Modal.Header> Edit User</Modal.Header>
  <Modal.Body>
          <EditModal user={singleUser} />
  </Modal.Body>
  <Modal.Footer>
    <button className='btn btn-danger' onClick={()=>{handleClickEditClose(userId)}}>Apply</button>
  </Modal.Footer>
</Modal>

<Modal show={deleteModalShow}>
  <Modal.Header> Delete User</Modal.Header>
  <Modal.Body>
          <p>Delete {singleUser&&singleUser.map((person)=>{
            const {first_name ,last_name,id}=person
            return( <span style={{color:"blue"}} key={id}><b>{first_name+" "+last_name }</b></span>)
           
          })} from the List</p>
  </Modal.Body>
  <Modal.Footer>
    <button className='btn btn-danger' onClick={()=>{handleClickDeleteClose(userId)}}>Apply</button>
  </Modal.Footer>
</Modal>
<Modal show={saveModalShow}>
  <Modal.Header> Save User</Modal.Header>
  <Modal.Body>
          <p> Save  {singleUser&&singleUser.map((person)=>{
            const {first_name ,last_name,id}=person
            return( <span style={{color:"blue"}} key={id}><b>{first_name+" "+last_name }</b></span>)
           
          })} to the local</p>
  </Modal.Body>
  <Modal.Footer>
    <button className='btn btn-danger' onClick={()=>{handleClickSaveClose(userId)}}>Apply</button>
  </Modal.Footer>
</Modal>
</>)
    
}

export default Card
