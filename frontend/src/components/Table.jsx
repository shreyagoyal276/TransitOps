export default function Table({
  columns,
  data,
}) {
  return (
    <table className="w-full border-collapse">

      <thead>

        <tr className="bg-gray-100">

          {columns.map((col) => (
            <th
              key={col}
              className="text-left p-3"
            >
              {col}
            </th>
          ))}

        </tr>

      </thead>

      <tbody>

        {data.map((row, index) => (

          <tr
            key={index}
            className="border-b hover:bg-gray-50"
          >

            {Object.values(row).map((cell, i) => (

              <td
                key={i}
                className="p-3"
              >
                {cell}
              </td>

            ))}

          </tr>

        ))}

      </tbody>

    </table>
  );
}