import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { rolePermissions } from "../data/rolePermissions";

import {
    ShieldAlert,
    ArrowLeft,
    Sparkles
} from "lucide-react";


export default function ProtectedRoute({ children }) {


    const { user } = useContext(AuthContext);

    const location = useLocation();



    if (!user) {

        return <Navigate to="/" replace />;

    }



    const allowedRoutes = rolePermissions[user.role] || [];



    if (!allowedRoutes.includes(location.pathname)) {


        return (


            <div

                className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-blue-50
                via-purple-50
                to-pink-50
                px-6
                "

            >



                <div

                    className="
                    bg-white/80
                    backdrop-blur-xl
                    rounded-[3rem]
                    shadow-xl
                    border
                    border-white
                    p-10
                    max-w-md
                    text-center
                    "

                >



                    <div

                        className="
                        mx-auto
                        w-20
                        h-20
                        rounded-full
                        bg-red-100
                        flex
                        items-center
                        justify-center
                        mb-6
                        "

                    >

                        <ShieldAlert

                            size={40}

                            className="
                            text-red-500
                            "

                        />


                    </div>





                    <div

                        className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-purple-600
                        mb-3
                        "

                    >

                        <Sparkles size={18}/>


                        <span className="font-medium">

                            Security Check

                        </span>


                    </div>







                    <h1

                        className="
                        text-3xl
                        font-extrabold
                        text-gray-800
                        "

                    >

                        Access Denied

                    </h1>






                    <p

                        className="
                        text-gray-500
                        mt-4
                        leading-relaxed
                        "

                    >

                        You don't have permission to access this section.

                        Please contact your administrator if you think this is a mistake.


                    </p>







                    <button

                        onClick={() => window.history.back()}


                        className="
                        mt-8
                        px-6
                        py-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        text-white
                        font-semibold
                        flex
                        items-center
                        gap-2
                        mx-auto
                        hover:scale-105
                        transition
                        "

                    >

                        <ArrowLeft size={18}/>

                        Go Back


                    </button>




                </div>



            </div>


        );

    }



    return children;


}