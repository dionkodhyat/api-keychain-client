import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import auth from './Auth'

function Navigation(props) {
    const signOut = () => {
        localStorage.setItem('token', '')
        auth.logout(() => {
              props.history.push('/')
        })
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Noise Digital</Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
                <Button variant="danger" onClick={signOut} style={{display: props.show}}>Sign Out</Button>
            </Navbar>
        </div>
    )
}

export default Navigation
