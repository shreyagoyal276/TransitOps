import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {

    return (

        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 p-8 overflow-y-auto">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}