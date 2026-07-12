import {

    Bell,
    Settings,
    Sparkles

} from "lucide-react";


import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";



export default function Navbar(){


    const { user } = useContext(AuthContext);



    return(


        <header

            className="
            h-20
            bg-white/80
            backdrop-blur-xl
            border-b
            border-white
            px-8
            flex
            justify-between
            items-center
            shadow-sm
            relative
            "

        >




            {/* Decorative glow */}

            <div

                className="
                absolute
                right-40
                top-0
                w-40
                h-20
                bg-purple-100
                blur-3xl
                opacity-40
                "

            />








            {/* User Info */}


            <div className="relative">


                <div

                    className="
                    flex
                    items-center
                    gap-2
                    "

                >

                    <Sparkles

                        size={18}

                        className="
                        text-purple-500
                        "

                    />


                    <h2

                        className="
                        text-2xl
                        font-extrabold
                        text-gray-800
                        "

                    >

                        Welcome,

                        <span className="ml-2">


                            {user?.name}


                        </span>


                    </h2>


                </div>





                <p

                    className="
                    text-gray-500
                    capitalize
                    mt-1
                    ml-6
                    "

                >

                    {user?.role?.replaceAll("_"," ")}


                </p>



            </div>









            {/* Actions */}


            <div

                className="
                flex
                items-center
                gap-5
                "

            >



                <button

                    className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    hover:bg-blue-100
                    transition
                    "

                >

                    <Bell size={21}/>


                </button>







                <button

                    className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-purple-50
                    text-purple-600
                    flex
                    items-center
                    justify-center
                    hover:bg-purple-100
                    transition
                    "

                >

                    <Settings size={21}/>


                </button>







                <img


                    src={
                        `https://ui-avatars.com/api/?name=${user?.name}&background=8b5cf6&color=fff`
                    }


                    className="
                    w-12
                    h-12
                    rounded-full
                    ring-4
                    ring-purple-100
                    shadow-md
                    "

                    alt="User"


                />



            </div>




        </header>


    );


}