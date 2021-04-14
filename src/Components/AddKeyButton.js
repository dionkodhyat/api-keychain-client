import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import SuccessAlert from './SuccessAlert'
import ErrorAlert from './ErrorAlert'
const axios = require('axios')

function AddKeyButton(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [hours, setHours] = useState('1')
  const [description, setDescription] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [alertShow, setAlertShow] = useState(false)
  const [errorShow, setErrorShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const handleClose = () => {
    setAlertShow(false)
    setShow(false)
    setErrorShow(false)
    props.cb()
  };
  const handleShow = () => setShow(true);

  const token = localStorage.getItem('token')

  const generateKeys = async () => {
    if (name && hours) {
      console.log(`name ${name} hours ${hours}`) 
      axios.post(`http://localhost:9001/api/generateKey?token=${token}&name=${name}&description=${description}&hours=${hours}`).then(function(response) {
          if (response.status != 400) {
            setSecretKey(response.data)
            setAlertShow(true)
            setErrorShow(false)
          } else {
            setAlertShow(false)
            setErrorMessage(response.data)
            setErrorShow(true)
          }
    }).catch(function(error) {
      console.log(error)
      setAlertShow(false)
      setErrorShow(true)
      setErrorMessage('Name already exist')
      })
      
    } else {
      setErrorShow(true)
      setAlertShow(false)
      setErrorMessage('Please fill out the required input')
    }

  }



  return (
    <>
      <Button variant="success" onClick={handleShow} id={props.id}>
        Create Key
      </Button>

      <Modal show={show} onHide={handleClose} onExit={props.cb} size="lg" dialogClassName="border-none-2" contactClassName="border-none-2">
        <Modal.Header closeButton>
          <Modal.Title>Create Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="myForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Key Name:</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" required onChange={(e) => {
               setName(e.target.value);
                }}/></Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}/>
              </Form.Group>
              
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Expire in (in hours): </Form.Label>
                <Form.Control type="number" name="hours" placeholder="Hours" min="1" required onChange={(e) => {
                  setHours(e.target.value)}}/>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Dialog id="modal-guts"  >
          <SuccessAlert secretKey={secretKey} alertShow={alertShow}>

          </SuccessAlert>
          <ErrorAlert errorShow={errorShow} errorMessage={errorMessage}> 

          </ErrorAlert>
        </Modal.Dialog>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={generateKeys}>Create Key</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddKeyButton
