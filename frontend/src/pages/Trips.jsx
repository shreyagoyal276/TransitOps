import { useState } from "react";

import {
    Route,
    MapPin,
    Sparkles,
    Plus
} from "lucide-react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import StatusBadge from "../components/StatusBadge";


export default function Trips() {


    const [search,setSearch] = useState("");



    const trips = [

        {
            Trip:"TR-101",
            Vehicle:"Tata Ace",
            Driver:"Rahul",
            Route:"Delhi → Jaipur",
            Status:<StatusBadge status="Completed"/>
        },

        {
            Trip:"TR-102",
            Vehicle:"Ashok Leyland",
            Driver:"Priya",
            Route:"Mumbai → Pune",
            Status:<StatusBadge status="Pending"/>
        },

        {
            Trip:"TR-103",
            Vehicle:"Eicher Pro",
            Driver:"Amit",
            Route:"Indore → Bhopal",
            Status:<StatusBadge status="On Trip"/>
        }

    ];




    const filtered = trips.filter(

        trip =>

            trip.Driver.toLowerCase().includes(

                search.toLowerCase()

            )

    );





    return (

        <div className="relative overflow-hidden">



            {/* Background blobs */}

            <div
                className="
                absolute
                -top-24
                right-10
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
                absolute
                bottom-0
                -left-20
                w-72
                h-72
                bg-green-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />








            {/* Header */}

            <div
                className="
                flex
                justify-between
                items-center
                mb-10
                relative
                "
            >



                <div>


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        mb-3
                        "
                    >

                        <div
                            className="
                            p-3
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-200
                            to-green-200
                            text-blue-700
                            "
                        >

                            <Route size={26}/>

                        </div>


                        <span
                            className="
                            text-sm
                            font-medium
                            text-blue-600
                            "
                        >

                            Route Management

                        </span>


                    </div>





                    <h1
                        className="
                        text-5xl
                        font-extrabold
                        text-gray-800
                        "
                    >

                        Trips

                    </h1>



                    <p
                        className="
                        mt-3
                        text-lg
                        text-gray-500
                        "
                    >

                        Schedule, monitor and track fleet journeys

                    </p>


                </div>







                <Button className="w-auto">


                    <span
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <Plus size={18}/>

                        New Trip

                    </span>


                </Button>



            </div>









            {/* Search Panel */}

            <div
                className="
                bg-white/70
                backdrop-blur-xl
                p-5
                rounded-[2rem]
                border
                border-white
                shadow-sm
                mb-8
                "
            >


                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-blue-600
                    mb-4
                    "
                >

                    <Sparkles size={18}/>


                    <span className="font-semibold">

                        Search Trips

                    </span>


                </div>



                <SearchBar

                    value={search}

                    onChange={
                        (e)=>setSearch(e.target.value)
                    }

                    placeholder="Search Driver..."

                />


            </div>









            {/* Trip Summary Card */}

            <div
                className="
                grid
                md:grid-cols-3
                gap-5
                mb-8
                "
            >


                <div
                    className="
                    bg-blue-50
                    rounded-[2rem]
                    p-6
                    "
                >

                    <Route
                        className="
                        text-blue-600
                        mb-3
                        "
                    />

                    <h3 className="font-semibold text-gray-700">

                        Total Trips

                    </h3>

                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        1248

                    </p>

                </div>





                <div
                    className="
                    bg-green-50
                    rounded-[2rem]
                    p-6
                    "
                >

                    <MapPin
                        className="
                        text-green-600
                        mb-3
                        "
                    />

                    <h3 className="font-semibold text-gray-700">

                        Active Routes

                    </h3>

                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        48

                    </p>

                </div>





                <div
                    className="
                    bg-purple-50
                    rounded-[2rem]
                    p-6
                    "
                >

                    <Sparkles
                        className="
                        text-purple-600
                        mb-3
                        "
                    />

                    <h3 className="font-semibold text-gray-700">

                        Completed

                    </h3>


                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        1100

                    </p>


                </div>


            </div>









            {/* Table */}

            <Card>


                <Table

                    columns={[

                        "Trip",

                        "Vehicle",

                        "Driver",

                        "Route",

                        "Status"

                    ]}


                    data={filtered}


                />


            </Card>



        </div>

    );

}