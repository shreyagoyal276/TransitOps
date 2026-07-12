export default function Button({
  children,
  type = "button",
  variant = "primary",
}) {

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-gray-300 hover:bg-gray-400",
  };

  return (
    <button
      type={type}
      className={`w-full py-3 rounded-lg font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}