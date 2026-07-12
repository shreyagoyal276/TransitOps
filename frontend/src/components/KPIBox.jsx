import Card from "./Card";

export default function KPIBox({

  title,

  value,

  icon,

  color="text-blue-600"

}){

  return(

    <Card className="hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>

            {value}

          </h2>

        </div>

        <div className={`${color} bg-gray-100 rounded-xl p-4`}>

          {icon}

        </div>

      </div>

    </Card>

  );

}