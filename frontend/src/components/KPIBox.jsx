import Card from "./Card";


export default function KPIBox({

  title,

  value,

  icon,

  color="text-blue-600"

}){


  return(


    <Card

      className="
      group
      hover:-translate-y-1
      transition-all
      duration-300
      "

    >



      <div

        className="
        flex
        justify-between
        items-center
        "

      >





        <div>


          <p

            className="
            text-gray-500
            text-sm
            font-medium
            "

          >

            {title}

          </p>





          <h2

            className={`
            text-4xl
            font-extrabold
            mt-3
            tracking-tight
            ${color}
            `}

          >

            {value}

          </h2>



        </div>







        <div

          className={`
          ${color}
          bg-white
          rounded-[1.5rem]
          p-5
          shadow-sm
          border
          border-gray-100
          group-hover:scale-110
          transition-all
          duration-300
          `}

        >

          {icon}


        </div>



      </div>



    </Card>


  );


}