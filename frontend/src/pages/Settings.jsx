import DashboardLayout from "../layouts/DashboardLayout";

export default function Settings() {

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                Settings

            </h1>

            <div className="grid grid-cols-2 gap-6">

                {/* Company Information */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-xl font-semibold mb-5">

                        Company Information

                    </h2>

                    <div className="space-y-4">

                        <div>

                            <label className="block mb-1 font-medium">

                                Company Name

                            </label>

                            <input
                                type="text"
                                defaultValue="TransitOps Pvt Ltd"
                                className="w-full border rounded-lg px-4 py-2"
                            />

                        </div>

                        <div>

                            <label className="block mb-1 font-medium">

                                Email

                            </label>

                            <input
                                type="email"
                                defaultValue="admin@transitops.com"
                                className="w-full border rounded-lg px-4 py-2"
                            />

                        </div>

                        <div>

                            <label className="block mb-1 font-medium">

                                Contact Number

                            </label>

                            <input
                                type="text"
                                defaultValue="+91 9876543210"
                                className="w-full border rounded-lg px-4 py-2"
                            />

                        </div>

                    </div>

                </div>

                {/* Preferences */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-xl font-semibold mb-5">

                        Preferences

                    </h2>

                    <div className="space-y-5">

                        <label className="flex items-center justify-between">

                            Email Notifications

                            <input type="checkbox" defaultChecked />

                        </label>

                        <label className="flex items-center justify-between">

                            SMS Notifications

                            <input type="checkbox" />

                        </label>

                        <label className="flex items-center justify-between">

                            Auto Trip Assignment

                            <input type="checkbox" defaultChecked />

                        </label>

                        <label className="flex items-center justify-between">

                            Maintenance Alerts

                            <input type="checkbox" defaultChecked />

                        </label>

                    </div>

                </div>

            </div>

            {/* Account */}

            <div className="bg-white rounded-xl shadow p-6 mt-6">

                <h2 className="text-xl font-semibold mb-5">

                    Account

                </h2>

                <div className="flex gap-4">

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                        Save Changes

                    </button>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">

                        Logout

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}