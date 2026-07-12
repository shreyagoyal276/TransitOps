import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (

    <div className="relative">

      <Search
        className="absolute left-4 top-3.5 text-gray-400"
        size={18}
      />

      <input

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        className="w-80 border rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"

      />

    </div>

  );
}