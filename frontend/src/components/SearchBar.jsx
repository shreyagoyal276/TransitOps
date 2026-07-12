export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="border rounded-lg px-4 py-2 w-80"
    />
  );
}