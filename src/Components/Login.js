import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'
import auth from "./Auth";
const axios = require('axios')
const querystring = require('querystring')



const Login = (props) => {
  const [username, setFirstName] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:9001/api/login?username=${username}&password=${password}`)
    .then(function(response) {
            localStorage.setItem('token', response.data)
            auth.login(() => {
              props.history.push('/main')
            })
        })
        .catch(function(error) {
            console.log(error)
        })
  };

  return (
    <>
      <article>
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
                                setFirstName(e.target.value);
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

          <Button variant="primary" type="submit">Sign In</Button>
          <Link to='/register'><Button variant="secondary">Register</Button></Link>
              
        </Form>

        </div>

        {/* <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Username : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={username}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>password : </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button variant="primary" type="submit">Sign In</Button>
          <Link to='/register'><Button variant="secondary">Register</Button></Link>
        </form> */}

      </article>
    </>
  );
};



export default Login
