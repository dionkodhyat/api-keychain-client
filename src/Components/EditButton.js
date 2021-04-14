import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
const axios = require('axios')

const UpdateButton = (props) => {
    const token = localStorage.getItem('token')
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editDescription = async () => {
        alert(description)
        axios.patch(`http://localhost:9001/api/updateKey?token=${token}&name=${name}&description=${description}`).
        then(function(response) {
            handleShow()
            window.location.reload(); 
        }).catch(function(error) {
            console.log(error)
            alert(`Request can't be made`)
        })
    }
    return (
        <div>
            <Button variant="secondary" onClick={handleShow}>
                Edit
            </Button>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Edit Key Descriptiopn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="myForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Edit Description: </Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter description" value={description} required onChange={(e) => {
               setDescription(e.target.value);
                }}/></Form.Group>
                </Form>

          {/* <div className='form-control'>
            <label htmlFor='description'>Description : </label>
            <input
              type='text'
              id='description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={editDescription}>Save</Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default UpdateButton
