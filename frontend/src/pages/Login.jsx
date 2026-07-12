import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    Eye,
    EyeOff,
    Truck,
    Sparkles,
    ShieldCheck,
    Fuel,
    BarChart3,
    Users
} from "lucide-react";

import { login } from "../services/authService";
import { AuthContext } from "../context/AuthContext";


export default function Login() {


    const navigate = useNavigate();

    const { login: saveLogin } = useContext(AuthContext);


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [showPassword,setShowPassword] = useState(false);

    const [loading,setLoading] = useState(false);




    async function handleLogin(e){

        e.preventDefault();

        setLoading(true);


        try{

            const res = await login(email,password);


            saveLogin(
                res.data.user,
                res.data.token
            );


            navigate("/dashboard");


        }

        catch(err){

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

        <div
            className="
            min-h-screen
            grid
            lg:grid-cols-2
            bg-[#faf9ff]
            overflow-hidden
            relative
            "
        >



            {/* Background blobs */}

            <div
                className="
                absolute
                -top-32
                left-20
                w-96
                h-96
                bg-purple-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />


            <div
                className="
                absolute
                bottom-0
                right-0
                w-96
                h-96
                bg-blue-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />







            {/* LEFT PANEL */}

            <div
                className="
                hidden
                lg:flex
                items-center
                justify-center
                p-16
                relative
                "
            >


                <div
                    className="
                    max-w-lg
                    "
                >


                    <div
                        className="
                        inline-flex
                        p-5
                        rounded-[2rem]
                        bg-gradient-to-br
                        from-blue-200
                        to-purple-200
                        text-blue-700
                        "
                    >

                        <Truck size={60}/>

                    </div>




                    <h1
                        className="
                        text-6xl
                        font-extrabold
                        mt-8
                        bg-gradient-to-r
                        from-blue-600
                        via-purple-600
                        to-pink-500
                        bg-clip-text
                        text-transparent
                        "
                    >

                        TransitOps

                    </h1>


                    <p
                        className="
                        mt-6
                        text-2xl
                        text-gray-600
                        leading-relaxed
                        "
                    >

                        Smart Fleet Management

                        <br/>

                        for modern transport companies.

                    </p>





                    <div
                        className="
                        mt-12
                        grid
                        gap-4
                        "
                    >


                        {[
                            {
                                icon:<Truck/>,
                                text:"Vehicle Tracking"
                            },

                            {
                                icon:<Users/>,
                                text:"Driver Management"
                            },

                            {
                                icon:<Fuel/>,
                                text:"Fuel Monitoring"
                            },

                            {
                                icon:<ShieldCheck/>,
                                text:"Maintenance Scheduling"
                            },

                            {
                                icon:<BarChart3/>,
                                text:"Fleet Analytics"
                            }

                        ].map((item,index)=>(


                            <div

                                key={index}

                                className="
                                flex
                                items-center
                                gap-4
                                bg-white/70
                                backdrop-blur-xl
                                p-4
                                rounded-2xl
                                shadow-sm
                                "

                            >

                                <div
                                    className="
                                    text-blue-600
                                    "
                                >

                                    {item.icon}

                                </div>


                                <span
                                    className="
                                    font-medium
                                    text-gray-700
                                    "
                                >

                                    {item.text}

                                </span>


                            </div>


                        ))}


                    </div>


                </div>


            </div>







            {/* RIGHT PANEL */}


            <div
                className="
                flex
                items-center
                justify-center
                p-8
                relative
                "
            >



                <form

                    onSubmit={handleLogin}

                    className="
                    w-full
                    max-w-md
                    bg-white/80
                    backdrop-blur-xl
                    rounded-[3rem]
                    shadow-xl
                    border
                    border-white
                    p-10
                    "

                >


                    <div
                        className="
                        flex
                        justify-center
                        mb-5
                        "
                    >

                        <div
                            className="
                            p-4
                            rounded-3xl
                            bg-purple-100
                            text-purple-600
                            "
                        >

                            <Sparkles size={30}/>

                        </div>

                    </div>



                    <h2
                        className="
                        text-4xl
                        font-extrabold
                        text-center
                        text-gray-800
                        "
                    >

                        Welcome Back

                    </h2>


                    <p
                        className="
                        text-gray-500
                        text-center
                        mt-3
                        "
                    >

                        Login to your TransitOps account

                    </p>





                    <div className="mt-8">


                        <label className="font-semibold text-gray-700">

                            Email

                        </label>


                        <input

                            type="email"

                            className="
                            w-full
                            mt-2
                            p-4
                            rounded-2xl
                            bg-gray-50
                            border
                            focus:ring-2
                            focus:ring-purple-300
                            outline-none
                            "

                            placeholder="Enter Email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            required

                        />


                    </div>





                    <div className="mt-6">


                        <label className="font-semibold text-gray-700">

                            Password

                        </label>



                        <div className="relative">


                            <input


                                type={
                                    showPassword
                                    ?
                                    "text"
                                    :
                                    "password"
                                }


                                className="
                                w-full
                                mt-2
                                p-4
                                rounded-2xl
                                bg-gray-50
                                border
                                outline-none
                                focus:ring-2
                                focus:ring-purple-300
                                "


                                placeholder="Enter Password"


                                value={password}


                                onChange={
                                    (e)=>setPassword(e.target.value)
                                }


                                required


                            />



                            <button

                                type="button"

                                onClick={
                                    ()=>setShowPassword(!showPassword)
                                }

                                className="
                                absolute
                                right-5
                                top-6
                                text-gray-500
                                "

                            >

                                {
                                    showPassword
                                    ?
                                    <EyeOff size={20}/>
                                    :
                                    <Eye size={20}/>
                                }


                            </button>


                        </div>


                    </div>






                    <button

                        className="
                        w-full
                        mt-8
                        py-4
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        hover:scale-[1.02]
                        transition
                        text-white
                        font-bold
                        shadow-lg
                        "

                    >

                        {
                            loading
                            ?
                            "Signing In..."
                            :
                            "Login"
                        }


                    </button>







                    <div

                        className="
                        mt-10
                        rounded-[2rem]
                        bg-gradient-to-br
                        from-purple-50
                        to-blue-50
                        p-6
                        "

                    >

                        <h3 className="
                        font-bold
                        mb-4
                        text-gray-800
                        ">

                            Demo Credentials

                        </h3>



                        <div className="
                        text-sm
                        space-y-4
                        text-gray-600
                        ">


                            <div>
                                <strong>Fleet Manager</strong>
                                <br/>
                                manager@transitops.com
                                <br/>
                                manager123
                            </div>


                            <div>
                                <strong>Dispatcher</strong>
                                <br/>
                                dispatcher@transitops.com
                                <br/>
                                dispatch123
                            </div>


                            <div>
                                <strong>Safety Officer</strong>
                                <br/>
                                safety@transitops.com
                                <br/>
                                safety123
                            </div>


                            <div>
                                <strong>Financial Analyst</strong>
                                <br/>
                                finance@transitops.com
                                <br/>
                                finance123
                            </div>


                        </div>


                    </div>



                </form>



            </div>



        </div>

    );

}