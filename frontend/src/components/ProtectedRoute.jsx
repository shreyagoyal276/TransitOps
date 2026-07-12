import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { rolePermissions } from "../data/rolePermissions";

export default function ProtectedRoute({ children }) {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    if (!user) {

        return <Navigate to="/" replace />;

    }

    const allowedRoutes = rolePermissions[user.role] || [];

    if (!allowedRoutes.includes(location.pathname)) {

        return (

            <div className="flex items-center justify-center h-screen text-3xl font-bold">

                Access Denied

            </div>

        );

    }

    return children;

}