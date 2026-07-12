import DashboardLayout from "../layouts/DashboardLayout";

import KPIBox from "../components/KPIBox";

export default function Dashboard() {

    return (

        <DashboardLayout>

            <div className="grid grid-cols-4 gap-6">

                <KPIBox
                    title="Active Vehicles"
                    value="125"
                    color="text-green-600"
                />

                <KPIBox
                    title="Drivers On Duty"
                    value="68"
                    color="text-blue-600"
                />

                <KPIBox
                    title="Trips Today"
                    value="42"
                    color="text-orange-600"
                />

                <KPIBox
                    title="Fleet Utilization"
                    value="82%"
                    color="text-red-600"
                />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow h-80 flex justify-center items-center">

                    Fleet Status Chart

                </div>

                <div className="bg-white rounded-xl shadow h-80 flex justify-center items-center">

                    Vehicle Distribution

                </div>

            </div>

            <div className="bg-white rounded-xl shadow mt-8 p-6">

                <h2 className="text-xl font-bold mb-4">

                    Recent Trips

                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="text-left py-3">Trip</th>

                            <th>Vehicle</th>

                            <th>Driver</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">

                            <td className="py-4">

                                T-1001

                            </td>

                            <td>Van-05</td>

                            <td>Alex</td>

                            <td className="text-green-600">

                                Completed

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}