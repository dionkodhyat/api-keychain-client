import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'


const SuccessAlert = (props) => {
    return (
        <div id="modal-guts">
            <Alert variant="success" show={props.alertShow}>
            <Alert.Heading show={props.alertShow}>Success, here is your Secret Key</Alert.Heading>
            <p>
                {props.secretKey}
            </p>
            </Alert>
        </div>
    )
}

export default SuccessAlert
