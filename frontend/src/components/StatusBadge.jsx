export default function StatusBadge({ status }) {


  const colors = {


    Available:
      "bg-emerald-100 text-emerald-700 border-emerald-200",


    "On Trip":
      "bg-blue-100 text-blue-700 border-blue-200",


    "In Shop":
      "bg-orange-100 text-orange-700 border-orange-200",


    Completed:
      "bg-green-100 text-green-700 border-green-200",


    Pending:
      "bg-yellow-100 text-yellow-700 border-yellow-200",


    Cancelled:
      "bg-gray-100 text-gray-700 border-gray-200",


    Retired:
      "bg-red-100 text-red-700 border-red-200",

  };




  return (

    <span

      className={`
      inline-flex
      items-center
      gap-2
      px-4
      py-1.5
      rounded-full
      text-sm
      font-semibold
      border
      shadow-sm
      transition-all
      duration-200
      hover:scale-105

      ${
        colors[status] ||
        "bg-gray-100 text-gray-700 border-gray-200"
      }

      `}

    >


      <span

        className="
        w-2
        h-2
        rounded-full
        bg-current
        opacity-70
        "

      />


      {status}


    </span>

  );

}