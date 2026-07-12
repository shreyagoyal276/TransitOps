import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Trips from "../pages/Trips";
import Maintenance from "../pages/Maintenance";
import FuelExpenses from "../pages/FuelExpenses";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Register from "../pages/Register";

export default function AppRoutes() {

    return (

        <Routes>

        

            <Route
                path="/"
                element={<Login />}
            />

              <Route

              path="/register"

              element={<Register />}

          />
            <Route
                path="/dashboard"
                element={<DashboardLayout />}
            >

                <Route
                    index
                    element={<Dashboard />}
                />

                <Route
                    path="vehicles"
                    element={<Vehicles />}
                />

                <Route
                    path="drivers"
                    element={<Drivers />}
                />

                <Route
                    path="trips"
                    element={<Trips />}
                />

                <Route
                    path="maintenance"
                    element={<Maintenance />}
                />

                <Route
                    path="fuel"
                    element={<FuelExpenses />}
                />

                <Route
                    path="analytics"
                    element={<Analytics />}
                />

                <Route
                    path="settings"
                    element={<Settings />}
                />

            </Route>

            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>

    );

}