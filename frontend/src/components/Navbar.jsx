import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white h-16 shadow flex justify-between items-center px-8">

      <h2 className="text-xl font-bold">
        Fleet Dashboard
      </h2>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Search
            className="absolute left-3 top-3"
            size={18}
          />

          <input
            placeholder="Search..."
            className="border rounded-lg pl-10 py-2 pr-4"
          />

        </div>

        <Bell />

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
        />

      </div>

    </header>
  );
}