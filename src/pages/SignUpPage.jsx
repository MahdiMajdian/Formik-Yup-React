import React from 'react'
import SignUp from "../components/SignUp"
import img from "../assets/images/intro.svg"

const SignUpPage = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-12 h-screen">
            <div className="col-span-5 ">
                <SignUp />
            </div>
            <div className="col-span-7 lg:bg-gray-200 p-8 flex items-center justify-center">
                <div className="max-w-md">
                    <img src={img} alt='login' />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
