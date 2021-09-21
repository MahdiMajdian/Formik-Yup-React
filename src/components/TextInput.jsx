import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextInput = (props) => {
    const [field, meta] = useField(props)
    return (
        <div className='mb-4'>
            <label htmlFor={field.name} className='font-medium text-gray-600 capitalize'>{props.label}</label>
            <input type={props.type} id={field.name} autoComplete="off" {...field} {...props}
                className={`border w-full p-2 mt-2 border-gray-300 focus:outline-none focus:ring-1 rounded ${meta.touched && meta.error && 'border-red-600 focus:ring-red-500'}`} />
            <ErrorMessage component='div' className='text-red-500 text-sm font-medium' name={field.name} />
        </div>
    )
}

export default TextInput
