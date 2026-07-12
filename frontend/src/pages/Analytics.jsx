import DashboardLayout from "../layouts/DashboardLayout";
import KPIBox from "../components/KPIBox";

export default function Analytics() {

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">
                Analytics
            </h1>

            {/* KPI Cards */}

            <div className="grid grid-cols-4 gap-6">

                <KPIBox
                    title="Total Trips"
                    value="1,240"
                    color="text-blue-600"
                />

                <KPIBox
                    title="Revenue"
                    value="₹12.5L"
                    color="text-green-600"
                />

                <KPIBox
                    title="Fuel Cost"
                    value="₹3.2L"
                    color="text-orange-600"
                />

                <KPIBox
                    title="Avg Efficiency"
                    value="89%"
                    color="text-red-600"
                />

            </div>

            {/* Charts */}

            <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow h-80 flex justify-center items-center">

                    Monthly Trips Chart

                </div>

                <div className="bg-white rounded-xl shadow h-80 flex justify-center items-center">

                    Fuel Consumption Chart

                </div>

            </div>

            {/* Analytics Table */}

            <div className="bg-white rounded-xl shadow mt-8 p-6">

                <h2 className="text-xl font-bold mb-4">

                    Monthly Performance

                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="text-left py-3">Month</th>

                            <th>Total Trips</th>

                            <th>Revenue</th>

                            <th>Fuel Cost</th>

                            <th>Efficiency</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">

                            <td className="py-4">January</td>

                            <td>105</td>

                            <td>₹1,10,000</td>

                            <td>₹27,000</td>

                            <td className="text-green-600">
                                91%
                            </td>

                        </tr>

                        <tr className="border-b">

                            <td className="py-4">February</td>

                            <td>112</td>

                            <td>₹1,18,000</td>

                            <td>₹29,000</td>

                            <td className="text-green-600">
                                90%
                            </td>

                        </tr>

                        <tr className="border-b">

                            <td className="py-4">March</td>

                            <td>124</td>

                            <td>₹1,26,000</td>

                            <td>₹30,500</td>

                            <td className="text-orange-600">
                                88%
                            </td>

                        </tr>

                        <tr className="border-b">

                            <td className="py-4">April</td>

                            <td>118</td>

                            <td>₹1,22,000</td>

                            <td>₹28,200</td>

                            <td className="text-green-600">
                                90%
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}