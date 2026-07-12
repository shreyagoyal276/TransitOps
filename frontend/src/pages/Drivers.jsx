import { useState } from "react";

import {
    Users,
    UserPlus,
    Sparkles
} from "lucide-react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";


export default function Drivers(){


    const [search,setSearch]=useState("");



    const drivers=[

        {
            ID:"DR101",
            Name:"Rahul Sharma",
            License:"LMV",
            Status:"Available"
        },

        {
            ID:"DR102",
            Name:"Priya Singh",
            License:"HMV",
            Status:"On Duty"
        },

        {
            ID:"DR103",
            Name:"Amit Verma",
            License:"HMV",
            Status:"Leave"
        }

    ];




    const filtered=drivers.filter(d=>

        d.Name.toLowerCase().includes(

            search.toLowerCase()

        )

    );




    return(

        <div className="relative overflow-hidden">


            {/* Decorative Background */}

            <div
                className="
                absolute
                -top-24
                -right-10
                w-72
                h-72
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
                w-80
                h-80
                bg-purple-200
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
                            to-purple-200
                            text-blue-700
                            "
                        >

                            <Users size={25}/>

                        </div>


                        <span
                            className="
                            text-sm
                            font-medium
                            text-blue-600
                            "
                        >

                            Team Management

                        </span>


                    </div>



                    <h1
                        className="
                        text-5xl
                        font-extrabold
                        text-gray-800
                        "
                    >

                        Drivers

                    </h1>


                    <p
                        className="
                        text-gray-500
                        mt-3
                        text-lg
                        "
                    >

                        Manage driver availability and assignments

                    </p>


                </div>




                <Button className="w-auto">


                    <span className="
                    flex
                    items-center
                    gap-2
                    ">

                        <UserPlus size={18}/>

                        Add Driver

                    </span>


                </Button>


            </div>







            {/* Search */}

            <div
                className="
                mb-8
                bg-white/70
                backdrop-blur-xl
                p-5
                rounded-[2rem]
                border
                border-white
                shadow-sm
                "
            >


                <div
                    className="
                    flex
                    items-center
                    gap-2
                    mb-4
                    text-purple-600
                    "
                >

                    <Sparkles size={18}/>

                    <span className="font-medium">

                        Find Driver

                    </span>

                </div>


                <SearchBar

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    placeholder="Search Driver..."

                />


            </div>







            {/* Table */}

            <Card>


                <Table

                    columns={[

                        "ID",

                        "Name",

                        "License",

                        "Status"

                    ]}

                    data={filtered}


                />


            </Card>


        </div>

    );

}