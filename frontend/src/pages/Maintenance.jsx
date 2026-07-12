import DashboardLayout from "../layouts/DashboardLayout";

export default function Maintenance() {

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Maintenance
                </h1>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">

                    + Schedule Maintenance

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

                    <option>All Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>

                </select>

            </div>

            {/* Maintenance Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">Vehicle</th>

                            <th>Service Type</th>

                            <th>Next Due</th>

                            <th>Priority</th>

                            <th>Status</th>

                            <th>Estimated Cost</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b hover:bg-gray-50">

                            <td className="p-4">MH12AB1234</td>

                            <td>Oil Change</td>

                            <td>20 Jul 2026</td>

                            <td>

                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                                    Medium

                                </span>

                            </td>

                            <td>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

                                    Scheduled

                                </span>

                            </td>

                            <td>₹5,000</td>

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

                            <td>Brake Inspection</td>

                            <td>18 Jul 2026</td>

                            <td>

                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">

                                    High

                                </span>

                            </td>

                            <td>

                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">

                                    In Progress

                                </span>

                            </td>

                            <td>₹12,000</td>

                            <td>

                                <button className="text-blue-600 mr-3">

                                    Edit

                                </button>

                                <button className="text-green-600">

                                    Complete

                                </button>

                            </td>

                        </tr>

                        <tr className="hover:bg-gray-50">

                            <td className="p-4">RJ20CD9087</td>

                            <td>Tyre Replacement</td>

                            <td>10 Jul 2026</td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                                    Low

                                </span>

                            </td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                                    Completed

                                </span>

                            </td>

                            <td>₹20,000</td>

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