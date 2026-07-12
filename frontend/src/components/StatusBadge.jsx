export default function StatusBadge({ status }) {
  return (
    <span className="px-3 py-1 rounded bg-green-100 text-green-700">
      {status}
    </span>
  );
}