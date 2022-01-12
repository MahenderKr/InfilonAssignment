  import { Form, Button } from "react-bootstrap"
  import React,{useState} from "react";
const EditModal = ({user}) =>{

    const id = user.id;
    const [firstName, setFirstName] = useState(user[0].first_name);
     const [lastName, setLastName] = useState(user[0].last_name);
    const [email, setEmail] = useState(user[0].email);
    const updatedUser = {id, firstName,lastName, email}
    const handleSubmit = (e) => {
        e.preventDefault();
        // updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder=" First Name *"
                    name="first_name"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <br></br>
                        <Form.Group>
                <Form.Control
                    type="text"
                    placeholder=" Last Name *"
                    name="last_name"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                />
            </Form.Group>
                <br></br>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
        </Form>

     )
}

export default EditModal;

