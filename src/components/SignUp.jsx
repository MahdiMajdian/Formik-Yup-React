import { Form, Formik } from 'formik'
import React from 'react'
import TextInput from './TextInput'
import * as Yup from 'yup'
const SignUp = () => {
    const validate = Yup.object({
        firstName: Yup.string().max(20, 'first name should be less than 20 characters').required('first name is required'),
        lastName: Yup.string().max(25, 'last name must be less than 25 chars').required('lastname field must be filled'),
        email: Yup.string().email('invalid email').required('email field must not be empty'),
        password: Yup.string().min(6, 'password must be at least 6 chars or more').required('Password field must be filled'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'passwords must be the same').required('Password field must be filled'),
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={val => console.log(val)}>
            {formik => (
                <div className='p-8'>
                    <h1 className='mb-8 font-bold text-5xl text-gray-600'>Sign Up</h1>
                    <Form className='px-8'>
                        <TextInput label="firstname" name='firstName' type='text' />
                        <TextInput label="lastname" name='lastName' type='text' />
                        <TextInput label="email" name='email' type='email' />
                        <TextInput label="password" name='password' type='password' />
                        <TextInput label="confirm Password" name='confirmPassword' type='password' />
                        <button type='submit' className={`rounded bg-green-500 hover:bg-green-600 mr-4 px-4 py-2 text-white font-medium`}>Submit</button>
                        <button type='reset' className={`rounded text-red-600 hover:text-white hover:bg-red-600 mr-4 px-4 py-2 border border-red-600 font-medium`}>Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp
