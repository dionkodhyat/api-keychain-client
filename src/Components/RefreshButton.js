import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
const axios = require('axios')

const RefreshButton = (props) => {
    const token = localStorage.getItem('token')
    const [name, setName] = useState(props.name)
    const [expires, setExpires] = useState(props.expires)

    const refreshDuration = async () => {
        axios.post(`http://localhost:9001/api/refreshKey?token=${token}&name=${name}&expires=${expires}`).
        then(function(response) {
            window.location.reload(); 
        }).catch(function(error) {
            alert(`Request can't be made`)
        })
    }

    return (
        <div>
            <Button onClick={refreshDuration} variation="primary">Refresh</Button>
        </div>
    )
}

export default RefreshButton
