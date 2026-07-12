import { useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

export default function Vehicles(){

    const [search,setSearch]=useState("");

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

        <>

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Vehicles

                    </h1>

                    <p className="text-gray-500">

                        Fleet Vehicle Management

                    </p>

                </div>

                <Button className="w-auto">

                    + Add Vehicle

                </Button>

            </div>

            <div className="mb-6">

                <SearchBar

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    placeholder="Search Vehicle..."

                />

            </div>

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

        </>

    );

}