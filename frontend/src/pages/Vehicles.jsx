import DashboardLayout from "../layouts/DashboardLayout";

export default function Vehicles() {

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Vehicle Registry

                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                    + Add Vehicle

                </button>

            </div>

            {/* Search */}

            <div className="bg-white rounded-xl shadow p-4 mb-6">

                <input
                    type="text"
                    placeholder="Search by Vehicle Number..."
                    className="w-full border rounded-lg px-4 py-2"
                />

            </div>

            {/* Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">Vehicle No.</th>

                            <th>Type</th>

                            <th>Driver</th>

                            <th>Status</th>

                            <th>Capacity</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">MH12AB1234</td>

                            <td>Truck</td>

                            <td>Raj Sharma</td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                                    Available

                                </span>

                            </td>

                            <td>8 Tons</td>

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

                            <td className="p-4">DL10XY5678</td>

                            <td>Van</td>

                            <td>Amit Kumar</td>

                            <td>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

                                    On Trip

                                </span>

                            </td>

                            <td>2 Tons</td>

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

                            <td className="p-4">RJ20CD9087</td>

                            <td>Bus</td>

                            <td>Neha Jain</td>

                            <td>

                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">

                                    Maintenance

                                </span>

                            </td>

                            <td>45 Seats</td>

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