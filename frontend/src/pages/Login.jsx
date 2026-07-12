import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Eye, EyeOff, Truck } from "lucide-react";

import { login } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { login: saveLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await login(email, password);

            saveLogin(

                res.data.user,

                res.data.token

            );

            navigate("/dashboard");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

        finally{

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="hidden lg:flex bg-blue-700 text-white items-center justify-center p-16">

                <div>

                    <Truck size={70} />

                    <h1 className="text-5xl font-bold mt-6">

                        TransitOps

                    </h1>

                    <p className="mt-6 text-xl leading-8">

                        Smart Fleet Management

                        <br />

                        for Modern Transport Companies.

                    </p>

                    <div className="mt-12 space-y-4">

                        <p>

                            ✔ Vehicle Tracking

                        </p>

                        <p>

                            ✔ Driver Management

                        </p>

                        <p>

                            ✔ Fuel Monitoring

                        </p>

                        <p>

                            ✔ Maintenance Scheduling

                        </p>

                        <p>

                            ✔ Fleet Analytics

                        </p>

                    </div>

                </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center items-center bg-gray-100 p-8">

                <form

                    onSubmit={handleLogin}

                    className="bg-white shadow-xl rounded-2xl w-full max-w-md p-10"

                >

                    <h2 className="text-4xl font-bold text-center">

                        Welcome Back

                    </h2>

                    <p className="text-gray-500 text-center mt-2">

                        Login to your TransitOps account

                    </p>

                    <div className="mt-8">

                        <label className="font-semibold">

                            Email

                        </label>

                        <input

                            type="email"

                            className="w-full mt-2 border rounded-lg p-3"

                            placeholder="Enter Email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            required

                        />

                    </div>

                    <div className="mt-6">

                        <label className="font-semibold">

                            Password

                        </label>

                        <div className="relative">

                            <input

                                type={showPassword ? "text" : "password"}

                                className="w-full mt-2 border rounded-lg p-3"

                                placeholder="Enter Password"

                                value={password}

                                onChange={(e)=>setPassword(e.target.value)}

                                required

                            />

                            <button

                                type="button"

                                onClick={()=>setShowPassword(!showPassword)}

                                className="absolute right-4 top-6"

                            >

                                {

                                    showPassword ?

                                    <EyeOff size={20}/>

                                    :

                                    <Eye size={20}/>

                                }

                            </button>

                        </div>

                    </div>

                    <button

                        className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-3 font-semibold"

                    >

                        {

                            loading ?

                            "Signing In..."

                            :

                            "Login"

                        }

                    </button>

                    <div className="mt-10 bg-gray-100 rounded-xl p-5">

                        <h3 className="font-bold mb-3">

                            Demo Credentials

                        </h3>

                        <div className="text-sm space-y-3">

                            <div>

                                <strong>

                                    Fleet Manager

                                </strong>

                                <br />

                                manager@transitops.com

                                <br />

                                manager123

                            </div>

                            <div>

                                <strong>

                                    Dispatcher

                                </strong>

                                <br />

                                dispatcher@transitops.com

                                <br />

                                dispatch123

                            </div>

                            <div>

                                <strong>

                                    Safety Officer

                                </strong>

                                <br />

                                safety@transitops.com

                                <br />

                                safety123

                            </div>

                            <div>

                                <strong>

                                    Financial Analyst

                                </strong>

                                <br />

                                finance@transitops.com

                                <br />

                                finance123

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>

    );

}