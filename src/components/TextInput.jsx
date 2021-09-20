import { useField } from 'formik'
import React from 'react'

const TextInput = (props) => {
    const [field, meta] = useField(props)
    console.log(field)
    return (
        <div className='px-8'>
            <label htmlFor={field.name} className='font-medium text-gray-600 capitalize'>{props.label}</label>
            <input type={props.type} id={field.name} className='border w-full p-2 mt-2 mb-4 border-gray-300 rounded' />
        </div>
    )
}

export default TextInput
