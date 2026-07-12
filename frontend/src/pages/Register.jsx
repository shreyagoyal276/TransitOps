import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/authService";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        role: "fleet_manager"

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    async function handleRegister(e) {

        e.preventDefault();

        try {

            const res = await register(form);

            alert(res.data.message);

            navigate("/");

        }

        catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center">

            <form

                onSubmit={handleRegister}

                className="bg-white p-8 rounded shadow w-96"

            >

                <h2 className="text-3xl font-bold mb-6">

                    Register

                </h2>

                <input

                    name="name"

                    placeholder="Full Name"

                    className="border w-full p-2 mb-4"

                    onChange={handleChange}

                />

                <input

                    name="email"

                    placeholder="Email"

                    className="border w-full p-2 mb-4"

                    onChange={handleChange}

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    className="border w-full p-2 mb-4"

                    onChange={handleChange}

                />

                <select

                    name="role"

                    className="border w-full p-2 mb-4"

                    onChange={handleChange}

                >

                    <option value="fleet_manager">

                        Fleet Manager

                    </option>

                    <option value="dispatcher">

                        Dispatcher

                    </option>

                    <option value="safety_officer">

                        Safety Officer

                    </option>

                    <option value="financial_analyst">

                        Financial Analyst

                    </option>

                </select>

                <button

                    className="bg-blue-600 text-white w-full py-2 rounded"

                >

                    Register

                </button>

                <p className="mt-4 text-center">

                    Already have an account?

                    <Link

                        to="/"

                        className="text-blue-600"

                    >

                        {" "}Login

                    </Link>

                </p>

            </form>

        </div>

    );

}