import React from 'react'
import TextInput from './reusable/TextInput'
import { Form } from 'react-bootstrap';
function SignUp() {

    return (
        <Form className='m-4'>
            <h2 className='mb-3'>SignUp Form</h2>
            <TextInput
                label="Email Address"
                type="email" name="email"
                disclaimer="We'll never share your email with anyone else." />
            <TextInput
                label="Enter Password"
                type="password"
                name="password"
                />
            <button className='btn btn-primary'>Submit</button>
        </Form>
    )
}

export default SignUp