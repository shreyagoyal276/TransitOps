export default function Table({

    columns,

    data

}) {

    return (

        <div className="overflow-x-auto">

            <table className="w-full">

                <thead>

                    <tr className="bg-gray-100">

                        {

                            columns.map((col)=>(

                                <th

                                    key={col}

                                    className="text-left p-4 font-semibold"

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

                                className="border-b hover:bg-gray-50"

                            >

                                {

                                    columns.map((col)=>(

                                        <td

                                            key={col}

                                            className="p-4"

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