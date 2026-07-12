import DashboardLayout from "../layouts/DashboardLayout";

export default function FuelExpenses() {

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Fuel & Expenses

                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                    + Add Fuel Log

                </button>

            </div>

            {/* Search */}

            <div className="bg-white rounded-xl shadow p-4 mb-6 flex gap-4">

                <input
                    type="text"
                    placeholder="Search Vehicle..."
                    className="flex-1 border rounded-lg px-4 py-2"
                />

                <select className="border rounded-lg px-4 py-2">

                    <option>All Months</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>

                </select>

            </div>

            {/* Fuel Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">Date</th>

                            <th>Vehicle</th>

                            <th>Driver</th>

                            <th>Fuel (L)</th>

                            <th>Amount</th>

                            <th>Mileage</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">12 Jul 2026</td>

                            <td>MH12AB1234</td>

                            <td>Raj Sharma</td>

                            <td>65 L</td>

                            <td>₹6,240</td>

                            <td>14 km/L</td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Edit

                                </button>

                                <button className="text-red-600">

                                    Delete

                                </button>

                            </td>

                        </tr>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">10 Jul 2026</td>

                            <td>DL10XY5678</td>

                            <td>Amit Kumar</td>

                            <td>42 L</td>

                            <td>₹4,020</td>

                            <td>16 km/L</td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Edit

                                </button>

                                <button className="text-red-600">

                                    Delete

                                </button>

                            </td>

                        </tr>

                        <tr className="hover:bg-gray-50">

                            <td className="p-4">08 Jul 2026</td>

                            <td>RJ20CD9087</td>

                            <td>Neha Jain</td>

                            <td>80 L</td>

                            <td>₹7,760</td>

                            <td>12 km/L</td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Edit

                                </button>

                                <button className="text-red-600">

                                    Delete

                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}