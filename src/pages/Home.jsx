import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const navToLogin = () => {
        navigate('./login');
    }
    const navToRegister = () => {
        navigate('./register');
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            <h1 className='text-4xl font-medium'>Home</h1>
            <span>
                <button className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#f9f9f9] cursor-pointer transition-colors duration-200 focus:outline focus:outline-[4px] focus:outline-auto focus:outline-webkit-focus-ring-color" onClick={navToLogin}>Login</button>
                <button onClick={navToRegister}className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#f9f9f9] cursor-pointer transition-colors duration-200 focus:outline focus:outline-[4px] focus:outline-auto focus:outline-webkit-focus-ring-color">Register</button>
            </span>
        </div>
    )
}