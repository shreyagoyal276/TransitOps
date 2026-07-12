import Card from "../components/Card";
import KPIBox from "../components/KPIBox";
import Table from "../components/Table";

import {
    Fuel,
    IndianRupee,
    TrendingUp,
    Wallet,
    Sparkles
} from "lucide-react";


export default function FuelExpenses(){


    const data=[

        {
            Vehicle:"Tata Ace",
            Fuel:"65 L",
            Cost:"₹5400",
            Mileage:"16 km/L"
        },

        {
            Vehicle:"Ashok Leyland",
            Fuel:"110 L",
            Cost:"₹9200",
            Mileage:"13 km/L"
        },

        {
            Vehicle:"Eicher Pro",
            Fuel:"80 L",
            Cost:"₹6800",
            Mileage:"15 km/L"
        }

    ];



    return(

        <div className="relative overflow-hidden">


            {/* Background Decorations */}

            <div
                className="
                absolute
                -top-24
                right-10
                w-80
                h-80
                bg-yellow-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />


            <div
                className="
                absolute
                bottom-10
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

            <div className="mb-10 relative">


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
                        from-yellow-200
                        to-orange-200
                        text-orange-700
                        "
                    >

                        <Fuel size={26}/>

                    </div>


                    <span
                        className="
                        text-sm
                        font-medium
                        text-orange-600
                        "
                    >

                        Cost Monitoring

                    </span>


                </div>



                <h1
                    className="
                    text-5xl
                    font-extrabold
                    text-gray-800
                    tracking-tight
                    "
                >

                    Fuel & Expenses

                </h1>


                <p
                    className="
                    mt-3
                    text-lg
                    text-gray-500
                    "
                >

                    Track fuel consumption, mileage and operational costs

                </p>


            </div>







            {/* KPI Cards */}

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-7
                "
            >


                <KPIBox

                    title="Fuel Used"

                    value="2560 L"

                    icon={<Fuel size={38}/>}

                    color="text-yellow-600"

                />



                <KPIBox

                    title="Fuel Cost"

                    value="₹2.6 L"

                    icon={<IndianRupee size={38}/>}

                    color="text-green-600"

                />



                <KPIBox

                    title="Average Mileage"

                    value="15 km/L"

                    icon={<TrendingUp size={38}/>}

                    color="text-orange-600"

                />



                <KPIBox

                    title="Monthly Expense"

                    value="₹4.8 L"

                    icon={<Wallet size={38}/>}

                    color="text-red-600"

                />


            </div>







            {/* Expense Table */}

            <div
                className="
                mt-10
                "
            >

                <Card>


                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        mb-5
                        text-green-600
                        "
                    >

                        <Sparkles size={20}/>

                        <span className="font-semibold">

                            Fuel Expense Summary

                        </span>

                    </div>



                    <Table

                        columns={[

                            "Vehicle",

                            "Fuel",

                            "Cost",

                            "Mileage"

                        ]}

                        data={data}

                    />


                </Card>


            </div>


        </div>

    );

}