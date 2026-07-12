import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  Wrench,
  Fuel,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const roleMenus = {

  fleet_manager: [

    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Vehicles", icon: Truck, path: "/dashboard/vehicles" },
    { title: "Drivers", icon: Users, path: "/dashboard/drivers" },
    { title: "Trips", icon: Route, path: "/dashboard/trips" },
    { title: "Maintenance", icon: Wrench, path: "/dashboard/maintenance" },
    { title: "Fuel & Expenses", icon: Fuel, path: "/dashboard/fuel" },
    { title: "Analytics", icon: BarChart3, path: "/dashboard/analytics" },
    { title: "Settings", icon: Settings, path: "/dashboard/settings" }

  ],

  dispatcher: [

    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Vehicles", icon: Truck, path: "/dashboard/vehicles" },
    { title: "Drivers", icon: Users, path: "/dashboard/drivers" },
    { title: "Trips", icon: Route, path: "/dashboard/trips" }

  ],

  safety_officer: [

    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Vehicles", icon: Truck, path: "/dashboard/vehicles" },
    { title: "Trips", icon: Route, path: "/dashboard/trips" },
    { title: "Maintenance", icon: Wrench, path: "/dashboard/maintenance" }

  ],

  financial_analyst: [

    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Fuel & Expenses", icon: Fuel, path: "/dashboard/fuel" },
    { title: "Analytics", icon: BarChart3, path: "/dashboard/analytics" }

  ]

};

export default function Sidebar() {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const menu = roleMenus[user?.role] || [];

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">

      <div className="p-6 text-2xl font-bold border-b border-slate-700">

        🚚 TransitOps

      </div>

      <nav className="mt-6 flex-1">

        {

          menu.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink

                key={item.title}

                to={item.path}

                className={({ isActive }) =>

                  `flex items-center gap-3 px-6 py-3 transition ${

                    isActive

                      ? "bg-blue-600"

                      : "hover:bg-slate-800"

                  }`

                }

              >

                <Icon size={20} />

                {item.title}

              </NavLink>

            );

          })

        }

      </nav>

      <div className="border-t border-slate-700 p-5">

        <button

          onClick={handleLogout}

          className="flex items-center gap-3 w-full hover:text-red-400"

        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>

  );

}