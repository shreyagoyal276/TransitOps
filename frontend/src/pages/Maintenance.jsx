import Card from "../components/Card";
import Table from "../components/Table";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";

import {
    Wrench,
    CalendarCheck,
    Sparkles
} from "lucide-react";


export default function Maintenance() {


    const records = [

        {
            Vehicle: "Tata Ace",
            Type: "Oil Change",
            Date: "12 Jul 2026",
            Status: <StatusBadge status="Completed"/>
        },

        {
            Vehicle: "Ashok Leyland",
            Type: "Brake Service",
            Date: "15 Jul 2026",
            Status: <StatusBadge status="Pending"/>
        },

        {
            Vehicle: "Eicher Pro",
            Type: "Tyre Replacement",
            Date: "18 Jul 2026",
            Status: <StatusBadge status="In Shop"/>
        }

    ];



    return (

        <div className="relative overflow-hidden">


            {/* Background blobs */}

            <div
                className="
                absolute
                -top-28
                right-10
                w-80
                h-80
                bg-orange-200
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
                bg-blue-200
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
                            from-orange-200
                            to-yellow-200
                            text-orange-700
                            "
                        >

                            <Wrench size={26}/>

                        </div>


                        <span
                            className="
                            text-sm
                            font-medium
                            text-orange-600
                            "
                        >

                            Service Management

                        </span>


                    </div>




                    <h1
                        className="
                        text-5xl
                        font-extrabold
                        text-gray-800
                        "
                    >

                        Maintenance

                    </h1>


                    <p
                        className="
                        text-gray-500
                        mt-3
                        text-lg
                        "
                    >

                        Vehicle service records and maintenance tracking

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

                        <CalendarCheck size={18}/>

                        Schedule Service

                    </span>


                </Button>


            </div>







            {/* Service Overview */}

            <div
                className="
                mb-8
                bg-white/70
                backdrop-blur-xl
                rounded-[2rem]
                p-6
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
                    text-orange-600
                    mb-2
                    "
                >

                    <Sparkles size={20}/>


                    <span className="font-semibold">

                        Maintenance Overview

                    </span>


                </div>


                <p
                    className="
                    text-gray-500
                    "
                >

                    Keep vehicles healthy with scheduled inspections and repairs.

                </p>


            </div>








            {/* Table */}

            <Card>


                <Table

                    columns={[

                        "Vehicle",

                        "Type",

                        "Date",

                        "Status"

                    ]}


                    data={records}


                />


            </Card>


        </div>

    );

}