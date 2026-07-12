import Card from "../components/Card";
import KPIBox from "../components/KPIBox";

import {
    TrendingUp,
    IndianRupee,
    Truck,
    Route
} from "lucide-react";

export default function Analytics() {

    return (

        <>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">

                    Fleet Analytics

                </h1>

                <p className="text-gray-500">

                    Business Insights & Performance

                </p>

            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

                <KPIBox

                    title="Revenue"

                    value="₹12.6L"

                    icon={<IndianRupee size={35}/>}

                    color="text-green-600"

                />

                <KPIBox

                    title="Trips"

                    value="1248"

                    icon={<Route size={35}/>}

                    color="text-blue-600"

                />

                <KPIBox

                    title="Fleet Usage"

                    value="91%"

                    icon={<Truck size={35}/>}

                    color="text-orange-600"

                />

                <KPIBox

                    title="Growth"

                    value="+18%"

                    icon={<TrendingUp size={35}/>}

                    color="text-purple-600"

                />

            </div>

            <div className="grid xl:grid-cols-2 gap-6 mt-8">

                <Card title="Monthly Revenue">

                    <div className="h-80 flex justify-center items-center text-gray-400">

                        Revenue Chart

                    </div>

                </Card>

                <Card title="Trips Overview">

                    <div className="h-80 flex justify-center items-center text-gray-400">

                        Trips Chart

                    </div>

                </Card>

            </div>

            <Card

                title="Performance Summary"

                className="mt-8"

            >

                <div className="grid grid-cols-2 gap-8">

                    <div>

                        <h3 className="font-semibold">

                            Best Driver

                        </h3>

                        Rahul Sharma

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Best Vehicle

                        </h3>

                        Tata Ace

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Avg Fuel Cost

                        </h3>

                        ₹12/km

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Monthly Growth

                        </h3>

                        +18%

                    </div>

                </div>

            </Card>

        </>

    );

}