import { useEffect, useState } from "react";

import { getCurrentUser } from "../services/authService";


export default function Dashboard(){

    const [data,setData] = useState(null);


    useEffect(()=>{


        async function loadDashboard(){


            try{


                const res = await getCurrentUser();


                setData(res.data);


            }

            catch(error){

    console.log(error);

    localStorage.clear();

    window.location.href="/";

}


        }


        loadDashboard();


    },[]);



    if(!data){

        return <h2>Loading...</h2>;

    }



    return (

        <div>


            <h1>

                Welcome {data.user.name}

            </h1>


            <p>

                Role: {data.user.role}

            </p>


            <hr/>


            {

                data.modules.map((module)=>(

                    <div key={module.name}>


                        <h2>

                            {module.name}

                        </h2>


                        <p>

                            {module.description}

                        </p>


                    </div>

                ))

            }


        </div>

    );

}