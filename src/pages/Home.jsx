import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";

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
            <h1 className='text-4xl font-medium mb-4'>Stride</h1>
            <span>
                <LoginButton />
                <button onClick={navToRegister}className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" >Register</button>
            </span>
        </div>
    )
}