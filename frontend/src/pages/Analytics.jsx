import Card from "../components/Card";
import KPIBox from "../components/KPIBox";

import {
    TrendingUp,
    IndianRupee,
    Truck,
    Route,
    Sparkles
} from "lucide-react";


export default function Analytics() {


    return (

        <div className="relative overflow-hidden">


            {/* Background decorative blobs */}

            <div
                className="
                absolute
                -top-24
                right-0
                w-80
                h-80
                bg-purple-200
                rounded-full
                blur-3xl
                opacity-40
                "
            />


            <div
                className="
                absolute
                bottom-20
                -left-20
                w-72
                h-72
                bg-pink-200
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
                        from-purple-200
                        to-pink-200
                        text-purple-700
                        "
                    >

                        <Sparkles size={25}/>

                    </div>


                    <span
                        className="
                        text-sm
                        font-medium
                        text-purple-600
                        "
                    >

                        Business Intelligence

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

                    Fleet Analytics

                </h1>


                <p
                    className="
                    mt-3
                    text-lg
                    text-gray-500
                    "
                >

                    Smart insights, revenue trends & performance tracking

                </p>


            </div>





            {/* KPI Section */}

            <div
                className="
                grid
                xl:grid-cols-4
                md:grid-cols-2
                grid-cols-1
                gap-7
                "
            >


                <KPIBox

                    title="Revenue"

                    value="₹12.6L"

                    icon={
                        <IndianRupee size={38}/>
                    }

                    color="text-green-600"

                />



                <KPIBox

                    title="Trips"

                    value="1248"

                    icon={
                        <Route size={38}/>
                    }

                    color="text-blue-600"

                />



                <KPIBox

                    title="Fleet Usage"

                    value="91%"

                    icon={
                        <Truck size={38}/>
                    }

                    color="text-orange-600"

                />



                <KPIBox

                    title="Growth"

                    value="+18%"

                    icon={
                        <TrendingUp size={38}/>
                    }

                    color="text-purple-600"

                />


            </div>






            {/* Charts */}

            <div
                className="
                grid
                xl:grid-cols-2
                gap-8
                mt-10
                "
            >


                <Card title="Monthly Revenue">


                    <div
                        className="
                        h-80
                        rounded-[2.5rem]
                        bg-gradient-to-br
                        from-green-50
                        to-emerald-100
                        border
                        border-green-100
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        "
                    >


                        <div className="text-center">


                            <TrendingUp
                                size={45}
                                className="
                                mx-auto
                                mb-3
                                text-green-400
                                "
                            />


                            Revenue Chart


                        </div>


                    </div>


                </Card>





                <Card title="Trips Overview">


                    <div
                        className="
                        h-80
                        rounded-[3rem]
                        bg-gradient-to-br
                        from-blue-50
                        to-indigo-100
                        border
                        border-blue-100
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        "
                    >


                        <div className="text-center">


                            <Route
                                size={45}
                                className="
                                mx-auto
                                mb-3
                                text-blue-400
                                "
                            />


                            Trips Chart


                        </div>


                    </div>


                </Card>


            </div>







            {/* Performance Summary */}

            <Card

                title="Performance Summary"

                className="mt-10"

            >


                <div
                    className="
                    grid
                    md:grid-cols-2
                    gap-6
                    "
                >


                    {[
                        {
                            title:"Best Driver",
                            value:"Rahul Sharma",
                            color:"from-purple-100 to-purple-50"
                        },

                        {
                            title:"Best Vehicle",
                            value:"Tata Ace",
                            color:"from-blue-100 to-blue-50"
                        },

                        {
                            title:"Avg Fuel Cost",
                            value:"₹12/km",
                            color:"from-orange-100 to-orange-50"
                        },

                        {
                            title:"Monthly Growth",
                            value:"+18%",
                            color:"from-green-100 to-green-50"
                        }

                    ].map((item,index)=>(


                        <div

                            key={index}

                            className={`
                            p-6
                            rounded-[2rem]
                            bg-gradient-to-br
                            ${item.color}
                            border
                            border-white
                            shadow-sm
                            hover:scale-[1.02]
                            transition
                            `}

                        >


                            <h3
                                className="
                                font-semibold
                                text-gray-700
                                mb-2
                                "
                            >

                                {item.title}

                            </h3>


                            <p
                                className="
                                text-2xl
                                font-bold
                                text-gray-800
                                "
                            >

                                {item.value}

                            </p>


                        </div>


                    ))}


                </div>


            </Card>


        </div>

    );

}