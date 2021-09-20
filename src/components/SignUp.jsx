import { Form, Formik } from 'formik'
import React from 'react'
import TextInput from './TextInput'

const SignUp = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}>
            {formik => (
                <div className='p-8'>
                    <h1 className='mb-8 font-bold text-5xl text-gray-600'>Sign Up</h1>
                    {console.log(formik)}
                    <Form>
                        <TextInput label="firstname" name='firstName' type='text' />
                        <TextInput label="lastname" name='lastName' type='text' />
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp
