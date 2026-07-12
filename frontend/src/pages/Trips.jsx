import DashboardLayout from "../layouts/DashboardLayout";

export default function Trips() {

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Trip Management

                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                    + Create Trip

                </button>

            </div>

            {/* Search & Filter */}

            <div className="bg-white rounded-xl shadow p-4 mb-6 flex gap-4">

                <input
                    type="text"
                    placeholder="Search Trip..."
                    className="flex-1 border rounded-lg px-4 py-2"
                />

                <select className="border rounded-lg px-4 py-2">

                    <option>All Status</option>
                    <option>Pending</option>
                    <option>In Transit</option>
                    <option>Completed</option>

                </select>

            </div>

            {/* Trip Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">Trip ID</th>

                            <th>Vehicle</th>

                            <th>Driver</th>

                            <th>Source</th>

                            <th>Destination</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">TR001</td>

                            <td>MH12AB1234</td>

                            <td>Raj Sharma</td>

                            <td>Mumbai</td>

                            <td>Pune</td>

                            <td>

                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                                    Pending

                                </span>

                            </td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Dispatch

                                </button>

                                <button className="text-green-600">

                                    Complete

                                </button>

                            </td>

                        </tr>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">TR002</td>

                            <td>DL10XY5678</td>

                            <td>Amit Kumar</td>

                            <td>Delhi</td>

                            <td>Jaipur</td>

                            <td>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

                                    In Transit

                                </span>

                            </td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Track

                                </button>

                                <button className="text-green-600">

                                    Complete

                                </button>

                            </td>

                        </tr>

                        <tr className="hover:bg-gray-50">

                            <td className="p-4">TR003</td>

                            <td>RJ20CD9087</td>

                            <td>Neha Jain</td>

                            <td>Ahmedabad</td>

                            <td>Surat</td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                                    Completed

                                </span>

                            </td>

                            <td>

                                <button className="text-gray-600">

                                    View

                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}