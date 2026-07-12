export default function Table({

    columns,

    data

}) {


    return (


        <div

            className="
            overflow-x-auto
            rounded-[2rem]
            "

        >



            <table

                className="
                w-full
                border-separate
                border-spacing-y-3
                "

            >




                <thead>


                    <tr>


                        {

                            columns.map((col)=>(


                                <th


                                    key={col}


                                    className="
                                    text-left
                                    px-6
                                    py-4
                                    text-sm
                                    font-bold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                    "

                                >


                                    {col}



                                </th>


                            ))

                        }


                    </tr>


                </thead>







                <tbody>


                    {

                        data.map((row,index)=>(


                            <tr


                                key={index}


                                className="
                                bg-white
                                shadow-sm
                                rounded-2xl
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-md
                                "

                            >



                                {

                                    columns.map((col)=>(


                                        <td


                                            key={col}


                                            className="
                                            px-6
                                            py-5
                                            text-gray-700
                                            font-medium
                                            first:rounded-l-2xl
                                            last:rounded-r-2xl
                                            "

                                        >


                                            {row[col]}



                                        </td>


                                    ))

                                }



                            </tr>


                        ))

                    }



                </tbody>





            </table>



        </div>


    );


}