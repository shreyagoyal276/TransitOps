import {

    Bell,

    Settings

} from "lucide-react";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export default function Navbar(){

    const { user } = useContext(AuthContext);

    return(

        <header className="bg-white h-16 border-b shadow-sm px-8 flex justify-between items-center">

            <div>

                <h2 className="text-2xl font-bold">

                    Welcome,

                    {user?.name}

                </h2>

                <p className="text-gray-500 capitalize">

                    {user?.role?.replaceAll("_"," ")}

                </p>

            </div>

            <div className="flex items-center gap-6">

                <Bell className="cursor-pointer"/>

                <Settings className="cursor-pointer"/>

                <img

                    src={`https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff`}

                    className="rounded-full w-10"

                    alt="User"

                />

            </div>

        </header>

    );

}