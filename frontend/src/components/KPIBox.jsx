import Card from "./Card";

export default function KPIBox({
  title,
  value,
  icon,
  color = "text-blue-600",
}) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>
        </div>

        <div className={color}>{icon}</div>
      </div>
    </Card>
  );
}