import DashboardLayout from "../layouts/DashboardLayout";

export default function Drivers() {

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Driver Management

                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                    + Add Driver

                </button>

            </div>

            {/* Search */}

            <div className="bg-white rounded-xl shadow p-4 mb-6">

                <input
                    type="text"
                    placeholder="Search Driver..."
                    className="w-full border rounded-lg px-4 py-2"
                />

            </div>

            {/* Driver Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">Driver ID</th>

                            <th>Name</th>

                            <th>Phone</th>

                            <th>License No.</th>

                            <th>Status</th>

                            <th>Assigned Vehicle</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">D001</td>

                            <td>Raj Sharma</td>

                            <td>9876543210</td>

                            <td>DL123456789</td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                                    Available

                                </span>

                            </td>

                            <td>Truck MH12AB1234</td>

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

                            <td className="p-4">D002</td>

                            <td>Amit Kumar</td>

                            <td>9123456780</td>

                            <td>DL998877665</td>

                            <td>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

                                    On Trip

                                </span>

                            </td>

                            <td>Van DL10XY5678</td>

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

                            <td className="p-4">D003</td>

                            <td>Neha Jain</td>

                            <td>9988776655</td>

                            <td>DL776655443</td>

                            <td>

                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">

                                    Leave

                                </span>

                            </td>

                            <td>-</td>

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