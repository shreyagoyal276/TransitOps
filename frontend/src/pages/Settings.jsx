import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

import {
    Settings as SettingsIcon,
    Building2,
    Bell,
    Database,
    Moon,
    Sparkles
} from "lucide-react";


export default function Settings() {


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
                bg-purple-200
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
                        to-blue-200
                        text-purple-700
                        "
                    >

                        <SettingsIcon size={26}/>


                    </div>


                    <span
                        className="
                        text-sm
                        font-medium
                        text-purple-600
                        "
                    >

                        System Configuration

                    </span>


                </div>




                <h1
                    className="
                    text-5xl
                    font-extrabold
                    text-gray-800
                    "
                >

                    Settings

                </h1>



                <p
                    className="
                    text-lg
                    text-gray-500
                    mt-3
                    "
                >

                    Manage company details and system preferences

                </p>


            </div>









            {/* Company Information */}


            <Card title="Company Information">


                <div
                    className="
                    space-y-5
                    "
                >


                    <Input

                        label="Company Name"

                        value="TransitOps Pvt Ltd"

                    />



                    <Input

                        label="Email"

                        value="info@transitops.com"

                    />



                    <Input

                        label="Phone"

                        value="+91 9876543210"

                    />




                    <Button className="w-auto mt-4">


                        <span
                            className="
                            flex
                            items-center
                            gap-2
                            "
                        >

                            <Sparkles size={18}/>

                            Save Changes


                        </span>


                    </Button>


                </div>


            </Card>









            {/* Preferences */}


            <Card

                title="System Preferences"

                className="mt-10"

            >


                <div
                    className="
                    space-y-5
                    "
                >





                    <label
                        className="
                        flex
                        items-center
                        justify-between
                        bg-blue-50
                        rounded-2xl
                        p-5
                        cursor-pointer
                        "
                    >


                        <div
                            className="
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <Bell
                                className="text-blue-600"
                            />


                            <span
                                className="
                                font-medium
                                text-gray-700
                                "
                            >

                                Email Notifications

                            </span>


                        </div>



                        <input

                            type="checkbox"

                            defaultChecked

                            className="
                            w-5
                            h-5
                            "

                        />


                    </label>







                    <label
                        className="
                        flex
                        items-center
                        justify-between
                        bg-green-50
                        rounded-2xl
                        p-5
                        cursor-pointer
                        "
                    >


                        <div
                            className="
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <Database
                                className="text-green-600"
                            />


                            <span
                                className="
                                font-medium
                                text-gray-700
                                "
                            >

                                Auto Backup

                            </span>


                        </div>




                        <input

                            type="checkbox"

                            defaultChecked

                            className="
                            w-5
                            h-5
                            "

                        />



                    </label>









                    <label
                        className="
                        flex
                        items-center
                        justify-between
                        bg-purple-50
                        rounded-2xl
                        p-5
                        cursor-pointer
                        "
                    >


                        <div
                            className="
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <Moon
                                className="text-purple-600"
                            />


                            <span
                                className="
                                font-medium
                                text-gray-700
                                "
                            >

                                Dark Mode

                            </span>


                        </div>




                        <input

                            type="checkbox"

                            className="
                            w-5
                            h-5
                            "

                        />


                    </label>



                </div>


            </Card>



        </div>

    );

}