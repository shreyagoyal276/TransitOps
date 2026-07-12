import { useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import StatusBadge from "../components/StatusBadge";

export default function Trips() {

    const [search, setSearch] = useState("");

    const trips = [

        {
            Trip: "TR-101",
            Vehicle: "Tata Ace",
            Driver: "Rahul",
            Route: "Delhi → Jaipur",
            Status: <StatusBadge status="Completed" />
        },

        {
            Trip: "TR-102",
            Vehicle: "Ashok Leyland",
            Driver: "Priya",
            Route: "Mumbai → Pune",
            Status: <StatusBadge status="Pending" />
        },

        {
            Trip: "TR-103",
            Vehicle: "Eicher Pro",
            Driver: "Amit",
            Route: "Indore → Bhopal",
            Status: <StatusBadge status="On Trip" />
        }

    ];

    const filtered = trips.filter(

        trip =>

            trip.Driver.toLowerCase().includes(

                search.toLowerCase()

            )

    );

    return (

        <>

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Trips

                    </h1>

                    <p className="text-gray-500">

                        Trip Scheduling & Tracking

                    </p>

                </div>

                <Button className="w-auto">

                    + New Trip

                </Button>

            </div>

            <SearchBar

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                placeholder="Search Driver..."

            />

            <Card className="mt-6">

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

        </>

    );

}