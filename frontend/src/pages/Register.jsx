import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
    UserPlus,
    Sparkles,
    Truck,
    ShieldCheck,
    Users,
    Wallet
} from "lucide-react";

import { register } from "../services/authService";
import { AuthContext } from "../context/AuthContext";


export default function Register() {


    const navigate = useNavigate();


    const [form,setForm] = useState({

        name:"",
        email:"",
        password:"",
        role:"fleet_manager"

    });



    const { login } = useContext(AuthContext);




    const handleChange = (e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };






    async function handleRegister(e){


        e.preventDefault();


        try{


            const res = await register(form);


            login(

                res.data.user,

                res.data.token

            );


            navigate("/dashboard");


        }


        catch(err){


            alert(

                err.response?.data?.message ||

                "Registration Failed"

            );


        }


    }







    return (


        <div
            className="
            min-h-screen
            flex
            justify-center
            items-center
            bg-[#faf9ff]
            overflow-hidden
            relative
            p-6
            "
        >



            {/* Decorative blobs */}


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
                right-20
                w-80
                h-80
                bg-blue-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />







            <div
                className="
                grid
                lg:grid-cols-2
                gap-10
                items-center
                max-w-6xl
                w-full
                relative
                "
            >








                {/* Left Branding */}


                <div
                    className="
                    hidden
                    lg:block
                    p-10
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

                        Join TransitOps

                    </h1>



                    <p
                        className="
                        text-xl
                        text-gray-600
                        mt-5
                        leading-relaxed
                        "
                    >

                        Create your fleet management account

                        <br/>

                        and start managing smarter.

                    </p>






                    <div className="
                    mt-10
                    space-y-4
                    ">


                        {[
                            {
                                icon:<Users/>,
                                text:"Driver Management"
                            },

                            {
                                icon:<Truck/>,
                                text:"Vehicle Operations"
                            },

                            {
                                icon:<ShieldCheck/>,
                                text:"Safety Monitoring"
                            },

                            {
                                icon:<Wallet/>,
                                text:"Expense Management"
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

                                <span className="
                                text-purple-600
                                ">

                                    {item.icon}

                                </span>


                                <span className="
                                font-medium
                                text-gray-700
                                ">

                                    {item.text}

                                </span>


                            </div>


                        ))}


                    </div>


                </div>









                {/* Register Card */}


                <form

                    onSubmit={handleRegister}

                    className="
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-white
                    shadow-xl
                    rounded-[3rem]
                    p-10
                    w-full
                    max-w-md
                    mx-auto
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

                            <UserPlus size={32}/>


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

                        Register

                    </h2>



                    <p
                        className="
                        text-center
                        text-gray-500
                        mt-2
                        "
                    >

                        Create your TransitOps account

                    </p>








                    <div className="mt-8">


                        <input

                            name="name"

                            placeholder="Full Name"

                            className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-gray-50
                            border
                            outline-none
                            focus:ring-2
                            focus:ring-purple-300
                            mb-4
                            "

                            onChange={handleChange}

                        />



                        <input

                            name="email"

                            placeholder="Email"

                            className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-gray-50
                            border
                            outline-none
                            focus:ring-2
                            focus:ring-purple-300
                            mb-4
                            "

                            onChange={handleChange}

                        />



                        <input

                            type="password"

                            name="password"

                            placeholder="Password"

                            className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-gray-50
                            border
                            outline-none
                            focus:ring-2
                            focus:ring-purple-300
                            mb-4
                            "

                            onChange={handleChange}

                        />






                        <select

                            name="role"

                            className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-gray-50
                            border
                            outline-none
                            focus:ring-2
                            focus:ring-purple-300
                            "

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
                        text-white
                        font-bold
                        shadow-lg
                        hover:scale-[1.02]
                        transition
                        "

                    >

                        Register


                    </button>






                    <p
                        className="
                        mt-6
                        text-center
                        text-gray-500
                        "
                    >

                        Already have an account?


                        <Link

                            to="/"

                            className="
                            text-purple-600
                            font-semibold
                            ml-2
                            "

                        >

                            Login

                        </Link>


                    </p>



                </form>


            </div>


        </div>


    );

}