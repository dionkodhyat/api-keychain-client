import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navigation from './Navigation'

const axios = require('axios')

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      axios.post(`http://localhost:9001/api/register?username=${username}&password=${password}`).then(function(response) {
        console.log(response)
        props.history.push('/main')
      }).catch(function(error) {
        console.log(error)
      })
    }

    return (
      <div>
        <Navigation show="none"></Navigation>
        <div id="container">
              <Form id="loginForm"  onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text"
                            id="firstname" 
                            name="firstname" 
                            placeholder="Enter name" 
                            required
                            value={username} 
                            onChange={(e) => {
                                setUsername(e.target.value);
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" 
                              name="password" 
                              id="password"
                              placeholder="Enter password" 
                              value={password} 
                              onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>

          <Button variant="primary" type="submit">Register</Button>
              
        </Form>
        </div>
        </div>
    )
}

export default Register
