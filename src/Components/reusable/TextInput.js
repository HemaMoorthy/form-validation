import React from 'react'
import { Form } from 'react-bootstrap';
function TextInput(props) {
    return (
        <Form.Group className="mb-3" controlId={`form-basic-${props.name}`}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type="email" placeholder={`Enter ${props.name}`}/>
            <Form.Text className="text-muted">
               { props.disclaimer}
            </Form.Text>
        </Form.Group>
    )
}

export default TextInput