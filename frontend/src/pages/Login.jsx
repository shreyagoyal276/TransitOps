import { useState, useContext } from "react";

import { useNavigate, Link } from "react-router-dom";

import { login } from "../services/authService";

import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { login: saveLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const res = await login(email, password);

            saveLogin(

                res.data.user,

                res.data.token

            );

            navigate("/dashboard");

        }

        catch (err) {

            alert(err.response?.data?.message || "Login Failed");

        }

    }

    return (

        <form onSubmit={handleLogin}>

            {/* Keep your existing UI */}

            <input

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

            />

            <input

                type="password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

            />

            <button>

                Login

            </button>

            <Link to="/register">

                Create Account

            </Link>

        </form>

    );

}