import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import KPIBox from "../components/KPIBox";
import { getCurrentUser } from "../services/authService";

export default function Dashboard() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function loadUser() {

            try {

                const res = await getCurrentUser();
                setUser(res.data.user);

            } catch (err) {

                console.error(err);

            }

        }

        loadUser();

    }, []);

    return (

        <DashboardLayout>

            <div className="mb-6">

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-gray-600 mt-2">
                    Welcome {user?.name || "User"}
                </p>

            </div>

            {/* KPI Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

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

            {/* Charts */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow h-80 flex items-center justify-center">

                    Fleet Status Chart

                </div>

                <div className="bg-white rounded-xl shadow h-80 flex items-center justify-center">

                    Vehicle Distribution

                </div>

            </div>

            {/* Recent Trips */}

            <div className="bg-white rounded-xl shadow mt-8 p-6">

                <h2 className="text-xl font-bold mb-4">

                    Recent Trips

                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="text-left py-3">Trip ID</th>

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

                            <td className="text-green-600 font-semibold">
                                Completed
                            </td>

                        </tr>

                        <tr className="border-b">

                            <td className="py-4">
                                T-1002
                            </td>

                            <td>Truck-12</td>

                            <td>Rahul</td>

                            <td className="text-blue-600 font-semibold">
                                In Progress
                            </td>

                        </tr>

                        <tr>

                            <td className="py-4">
                                T-1003
                            </td>

                            <td>Mini Van-03</td>

                            <td>Amit</td>

                            <td className="text-yellow-600 font-semibold">
                                Pending
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}