import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {

    return (

        <div className="min-h-screen bg-gray-100">

            <Sidebar />

            <div className="ml-64 min-h-screen flex flex-col">

                <Navbar />

                <main className="flex-1 p-8">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}