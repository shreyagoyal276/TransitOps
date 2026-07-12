import { useState } from "react";

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

        <>

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Drivers

                    </h1>

                    <p className="text-gray-500">

                        Driver Management

                    </p>

                </div>

                <Button className="w-auto">

                    + Add Driver

                </Button>

            </div>

            <div className="mb-6">

                <SearchBar

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    placeholder="Search Driver..."

                />

            </div>

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

        </>

    );

}