import Card from "../components/Card";
import KPIBox from "../components/KPIBox";
import Table from "../components/Table";

import {

    Fuel,

    IndianRupee,

    TrendingUp,

    Wallet

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

        <>

            <h1 className="text-3xl font-bold mb-6">

                Fuel & Expenses

            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <KPIBox

                    title="Fuel Used"

                    value="2560 L"

                    icon={<Fuel size={34}/>}

                />

                <KPIBox

                    title="Fuel Cost"

                    value="₹2.6 L"

                    icon={<IndianRupee size={34}/>}

                    color="text-green-600"

                />

                <KPIBox

                    title="Average Mileage"

                    value="15 km/L"

                    icon={<TrendingUp size={34}/>}

                    color="text-orange-600"

                />

                <KPIBox

                    title="Monthly Expense"

                    value="₹4.8 L"

                    icon={<Wallet size={34}/>}

                    color="text-red-600"

                />

            </div>

            <Card className="mt-8">

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

        </>

    );

}