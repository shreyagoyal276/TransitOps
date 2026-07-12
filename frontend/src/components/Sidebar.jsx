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

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Vehicles",
    icon: Truck,
    path: "/vehicles",
  },
  {
    title: "Drivers",
    icon: Users,
    path: "/drivers",
  },
  {
    title: "Trips",
    icon: Route,
    path: "/trips",
  },
  {
    title: "Maintenance",
    icon: Wrench,
    path: "/maintenance",
  },
  {
    title: "Fuel & Expenses",
    icon: Fuel,
    path: "/fuel",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0">

      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        🚚 TransitOps
      </div>

      <nav className="mt-6">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 transition

                ${
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

        })}

      </nav>

      <button className="absolute bottom-5 left-5 flex gap-2 items-center">

        <LogOut size={18} />

        Logout

      </button>

    </aside>
  );
}