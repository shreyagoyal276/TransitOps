export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-medium">

        {label}

      </label>

      <input
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}