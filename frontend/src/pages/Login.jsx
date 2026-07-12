import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { setUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [role, setRole] = useState(1);

    const handleLogin = async () => {

        try {

            const res = await login(email, password, role);
            console.log("LOGIN RESPONSE:", res.data);
            if (res.data.success) {

                // Save JWT Token
                localStorage.setItem("token", res.data.token);

                // Save User
                localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.user)
                );

                // Update Context
                setUser(res.data.user);

                // Redirect
                navigate("/dashboard");

            } else {

                alert(res.data.message);

            }

        } catch (err) {

            alert(
                err.response?.data?.message || "Server Error"
            );

            console.log(err);

        }

    };

    return (

    <div
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f4f6f9"
        }}
    >

        <div
            style={{
                width: "350px",
                padding: "30px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
        >

            <h2>TransitOps Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px"
                }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px"
                }}
            />

            <button
                onClick={handleLogin}
                style={{
                    width: "100%",
                    padding: "10px",
                    cursor: "pointer"
                }}
            >
                Login
            </button>

        </div>

    </div>

);

}