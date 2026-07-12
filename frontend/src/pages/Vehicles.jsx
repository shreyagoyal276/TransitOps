import { useState } from "react";

import {
    Truck,
    Plus,
    Sparkles,
    MapPin,
    Activity
} from "lucide-react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";


export default function Vehicles(){


    const [search,setSearch] = useState("");



    const vehicles=[

        {
            ID:"VH001",
            Vehicle:"Tata Ace",
            Number:"MP07AA1234",
            Status:"Available"
        },

        {
            ID:"VH002",
            Vehicle:"Ashok Leyland",
            Number:"MP07BB5678",
            Status:"On Trip"
        },

        {
            ID:"VH003",
            Vehicle:"Eicher Pro",
            Number:"MP07CC8888",
            Status:"In Shop"
        }

    ];





    const filtered=vehicles.filter(v=>

        v.Vehicle.toLowerCase().includes(

            search.toLowerCase()

        )

    );






    return(


        <div className="relative overflow-hidden">



            {/* Background blobs */}


            <div
                className="
                absolute
                -top-28
                right-10
                w-80
                h-80
                bg-indigo-200
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
                bg-cyan-200
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
                            to-cyan-200
                            text-blue-700
                            "
                        >

                            <Truck size={26}/>


                        </div>



                        <span
                            className="
                            text-sm
                            font-medium
                            text-blue-600
                            "
                        >

                            Fleet Operations

                        </span>


                    </div>





                    <h1
                        className="
                        text-5xl
                        font-extrabold
                        text-gray-800
                        "
                    >

                        Vehicles

                    </h1>




                    <p
                        className="
                        mt-3
                        text-lg
                        text-gray-500
                        "
                    >

                        Manage fleet vehicles and availability

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

                        Add Vehicle

                    </span>


                </Button>



            </div>









            {/* Fleet Summary */}


            <div
                className="
                grid
                md:grid-cols-3
                gap-6
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


                    <Truck
                        className="
                        text-blue-600
                        mb-3
                        "
                    />


                    <h3 className="
                    font-semibold
                    text-gray-700
                    ">

                        Total Vehicles

                    </h3>


                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        128

                    </p>


                </div>







                <div
                    className="
                    bg-green-50
                    rounded-[2rem]
                    p-6
                    "
                >


                    <Activity
                        className="
                        text-green-600
                        mb-3
                        "
                    />


                    <h3 className="
                    font-semibold
                    text-gray-700
                    ">

                        Active Vehicles

                    </h3>


                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        96

                    </p>


                </div>








                <div
                    className="
                    bg-purple-50
                    rounded-[2rem]
                    p-6
                    "
                >


                    <MapPin
                        className="
                        text-purple-600
                        mb-3
                        "
                    />


                    <h3 className="
                    font-semibold
                    text-gray-700
                    ">

                        Running Routes

                    </h3>


                    <p className="
                    text-3xl
                    font-bold
                    mt-2
                    ">

                        48

                    </p>


                </div>



            </div>








            {/* Search */}


            <div
                className="
                bg-white/70
                backdrop-blur-xl
                rounded-[2rem]
                p-5
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

                        Search Fleet

                    </span>


                </div>




                <SearchBar


                    value={search}


                    onChange={
                        (e)=>setSearch(e.target.value)
                    }


                    placeholder="Search Vehicle..."


                />



            </div>









            {/* Vehicle Table */}


            <Card>


                <Table

                    columns={[

                        "ID",

                        "Vehicle",

                        "Number",

                        "Status"

                    ]}


                    data={filtered}


                />


            </Card>




        </div>


    );

}