import { useEffect, useState } from "react";

import {
    Truck,
    Users,
    Route,
    Activity
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

            try{

                const res = await getCurrentUser();

                setUser(res.data.user);

            }

            catch{}

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

        <>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    Welcome,

                    <span className="text-blue-600">

                        {" "}{user?.name}

                    </span>

                </h1>

                <p className="text-gray-500 mt-2">

                    Fleet Overview

                </p>

            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

                <KPIBox

                    title="Vehicles"

                    value="128"

                    icon={<Truck size={36}/>}

                    color="text-blue-600"

                />

                <KPIBox

                    title="Drivers"

                    value="72"

                    icon={<Users size={36}/>}

                    color="text-green-600"

                />

                <KPIBox

                    title="Trips Today"

                    value="48"

                    icon={<Route size={36}/>}

                    color="text-orange-600"

                />

                <KPIBox

                    title="Fleet Health"

                    value="94%"

                    icon={<Activity size={36}/>}

                    color="text-red-600"

                />

            </div>

            <div className="grid xl:grid-cols-2 gap-6 mt-8">

                <Card title="Fleet Status">

                    <div className="h-72 flex justify-center items-center text-gray-400">

                        Chart will be added

                    </div>

                </Card>

                <Card title="Vehicle Distribution">

                    <div className="h-72 flex justify-center items-center text-gray-400">

                        Pie Chart

                    </div>

                </Card>

            </div>

            <Card

                title="Recent Trips"

                className="mt-8"

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

        </>

    );

}