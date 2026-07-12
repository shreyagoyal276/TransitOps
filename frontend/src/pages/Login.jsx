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

      if (res.data.success) {

        setUser(res.data.user);

        navigate("/dashboard");

      } else {

        alert(res.data.message);

      }

    } catch (err) {

      alert("Server Error");

      console.log(err);

    }

  };

  return (
    <div>

      {/* Your existing UI */}

      <button onClick={handleLogin}>

        Login

      </button>

    </div>
  );
}