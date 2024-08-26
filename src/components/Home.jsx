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
        <div>
            <h1>Home</h1>
            <span>
                <button onClick={navToLogin}>Login</button>
                <button onClick={navToRegister}>Register</button>
            </span>
        </div>
    )
}