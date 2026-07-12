import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Replace with PHP API later
    console.log(form);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Section */}

      <div className="hidden md:flex w-1/2 bg-blue-700 text-white flex-col justify-center items-center p-12">

        <h1 className="text-5xl font-bold mb-6">
          🚚 TransitOps
        </h1>

        <p className="text-xl text-center leading-8">

          Smart Fleet & Transport
          <br />
          Operations Platform

        </p>

      </div>

      {/* Right Section */}

      <div className="w-full md:w-1/2 flex justify-center items-center">

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-xl rounded-2xl p-10 w-[420px]"
        >

          <h2 className="text-3xl font-bold text-center mb-2">

            Welcome Back

          </h2>

          <p className="text-gray-500 text-center mb-8">

            Sign in to continue

          </p>

          <Input
            label="Email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center mb-6">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember me

            </label>

            <button
              type="button"
              className="text-blue-600"
            >

              Forgot Password?

            </button>

          </div>

          <Button
            type="submit"
            variant="primary"
          >

            Login

          </Button>

        </form>

      </div>

    </div>
  );
}