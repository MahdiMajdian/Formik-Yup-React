import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='p-16'>
            <h1 className='text-5xl font-bold mb-8'>Home</h1>
            <Link className='text-2xl block py-4 font-medium text-blue-500' to='/create-service'>Create Service</Link>
            <Link className='text-2xl block py-4 font-medium text-blue-500' to='/signup'>Sign Up</Link>
        </div>
    )
}

export default HomePage
