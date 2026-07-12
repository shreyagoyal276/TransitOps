export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-3 rounded-xl font-semibold transition duration-200 shadow-sm ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}