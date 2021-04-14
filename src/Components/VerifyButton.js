import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
const axios = require('axios')

const VerifyButton = (props) => {
    const [name, setName] = useState(props.name)
    const token = window.localStorage.getItem('token')

    const verifyKey = async () => {
        axios.post(`http://localhost:9001/api/verifykey?token=${token}&name=${name}`).then(function(response) {
            alert(response.data)
        }).catch(function(error) {
            alert('403')
        })
    }
    

    return (
        <Button variant="dark" onClick={verifyKey}>Verify</Button>
    )
}

export default VerifyButton
