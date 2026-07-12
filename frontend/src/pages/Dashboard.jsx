import { useEffect, useState } from "react";

import {
    Truck,
    Users,
    Route,
    Activity,
    Sparkles
} from "lucide-react";

import Card from "../components/Card";
import KPIBox from "../components/KPIBox";
import Table from "../components/Table";

import { getCurrentUser } from "../services/authService";

export default function Dashboard() {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    useEffect(() => {

        async function load() {

            try {

                const res = await getCurrentUser();

                setUser(res.data.user);

            }

            catch {}

        }

        load();

    }, []);


    const recentTrips = [

        {
            Trip:"TR-101",
            Vehicle:"MH12AB1234",
            Driver:"Rahul",
            Status:"Completed"
        },

        {
            Trip:"TR-102",
            Vehicle:"MH12CD5678",
            Driver:"Priya",
            Status:"On Trip"
        },

        {
            Trip:"TR-103",
            Vehicle:"MH14EF9999",
            Driver:"Amit",
            Status:"Pending"
        }

    ];


    return (

        <div className="relative overflow-hidden">

            {/* Decorative pastel blobs */}

            <div className="
                absolute -top-20 -right-20
                w-72 h-72
                bg-purple-200
                rounded-full
                blur-3xl
                opacity-40
            "/>


            <div className="
                absolute top-96 -left-32
                w-80 h-80
                bg-blue-200
                rounded-full
                blur-3xl
                opacity-40
            "/>



            {/* Header */}

            <div className="mb-10 relative">


                <div className="
                    flex items-center gap-3
                    mb-3
                ">

                    <div className="
                        p-3
                        rounded-2xl
                        bg-gradient-to-br
                        from-purple-200
                        to-blue-200
                        text-purple-700
                    ">

                        <Sparkles size={25}/>

                    </div>


                    <p className="
                        text-sm
                        font-medium
                        text-purple-600
                    ">

                        Fleet Management Dashboard

                    </p>

                </div>



                <h1 className="
                    text-5xl
                    font-extrabold
                    tracking-tight
                    text-gray-800
                ">

                    Welcome,

                    <span className="
                        ml-3
                        bg-gradient-to-r
                        from-blue-600
                        via-purple-600
                        to-pink-500
                        bg-clip-text
                        text-transparent
                    ">

                        {user?.name}

                    </span>

                </h1>


                <p className="
                    mt-3
                    text-gray-500
                    text-lg
                ">

                    Smart insights and real-time fleet overview

                </p>


            </div>





            {/* KPI Cards */}

            <div className="
                grid
                xl:grid-cols-4
                md:grid-cols-2
                grid-cols-1
                gap-7
            ">


                <KPIBox

                    title="Vehicles"

                    value="128"

                    icon={<Truck size={38}/>}

                    color="
                    text-blue-600
                    "

                />


                <KPIBox

                    title="Drivers"

                    value="72"

                    icon={<Users size={38}/>}

                    color="
                    text-green-600
                    "

                />


                <KPIBox

                    title="Trips Today"

                    value="48"

                    icon={<Route size={38}/>}

                    color="
                    text-orange-600
                    "

                />


                <KPIBox

                    title="Fleet Health"

                    value="94%"

                    icon={<Activity size={38}/>}

                    color="
                    text-red-600
                    "

                />


            </div>





            {/* Charts */}

            <div className="
                grid
                xl:grid-cols-2
                gap-8
                mt-10
            ">


                <Card title="Fleet Status">


                    <div className="
                        h-72
                        rounded-[2rem]
                        bg-gradient-to-br
                        from-blue-50
                        to-indigo-100
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        border
                        border-blue-100
                    ">

                        <div className="text-center">

                            <Activity
                                className="
                                mx-auto
                                mb-3
                                text-blue-400
                                "
                                size={40}
                            />

                            Chart will be added

                        </div>


                    </div>


                </Card>





                <Card title="Vehicle Distribution">


                    <div className="
                        h-72
                        rounded-[3rem]
                        bg-gradient-to-br
                        from-pink-50
                        to-purple-100
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        border
                        border-purple-100
                    ">


                        <div className="text-center">


                            <Route

                                className="
                                mx-auto
                                mb-3
                                text-purple-400
                                "

                                size={40}

                            />


                            Pie Chart


                        </div>


                    </div>


                </Card>


            </div>





            {/* Table */}

            <div className="
                mt-10
                rounded-[2.5rem]
                overflow-hidden
            ">


                <Card

                    title="Recent Trips"

                    className="
                    bg-white/80
                    backdrop-blur-xl
                    "

                >


                    <Table

                        columns={[

                            "Trip",

                            "Vehicle",

                            "Driver",

                            "Status"

                        ]}


                        data={recentTrips}


                    />


                </Card>


            </div>


        </div>

    );

}