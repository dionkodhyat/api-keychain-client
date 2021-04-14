import React from 'react'
import Alert from 'react-bootstrap/Alert'

const ErrorAlert = (props) => {
    return (
        <div id="modal-guts">
            <Alert variant="danger" show={props.errorShow}>
            <Alert.Heading show={props.errorShow}>Error</Alert.Heading>
            <p>
                {props.errorMessage}
            </p>
            </Alert>
        </div>
    )
}

export default ErrorAlert
