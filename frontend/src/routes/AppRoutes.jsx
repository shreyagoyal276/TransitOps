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

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {

    return (

        <Routes>

            {/* Login */}

            <Route

                path="/"

                element={<Login />}

            />

            {/* Protected Dashboard */}

            <Route

                path="/dashboard"

                element={

                    <ProtectedRoute>

                        <DashboardLayout />

                    </ProtectedRoute>

                }

            >

                <Route

                    index

                    element={<Dashboard />}

                />

                <Route

                    path="vehicles"

                    element={

                        <ProtectedRoute>

                            <Vehicles />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="drivers"

                    element={

                        <ProtectedRoute>

                            <Drivers />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="trips"

                    element={

                        <ProtectedRoute>

                            <Trips />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="maintenance"

                    element={

                        <ProtectedRoute>

                            <Maintenance />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="fuel"

                    element={

                        <ProtectedRoute>

                            <FuelExpenses />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="analytics"

                    element={

                        <ProtectedRoute>

                            <Analytics />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="settings"

                    element={

                        <ProtectedRoute>

                            <Settings />

                        </ProtectedRoute>

                    }

                />

            </Route>

            <Route

                path="*"

                element={<Navigate to="/" replace />}

            />

        </Routes>

    );

}