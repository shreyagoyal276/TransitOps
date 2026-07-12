import { useEffect, useState } from "react";

import {
    Users,
    UserPlus,
    Sparkles
} from "lucide-react";

import Card from "../components/Card";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Input from "../components/Input";


import {
    getDrivers,
    addDriver
} from "../services/driverService";



export default function Drivers(){


    const [search,setSearch] = useState("");

    const [drivers,setDrivers] = useState([]);

    const [open,setOpen] = useState(false);


    const [form,setForm] = useState({

        name:"",
        license:"",
        phone:"",
        status:"Available"

    });





    useEffect(()=>{

        loadDrivers();

    },[]);






    async function loadDrivers(){

        try{


            const res = await getDrivers();


            console.log(
                "Driver Response:",
                res.data
            );



            // Handles all possible backend responses

            if(Array.isArray(res.data)){

                setDrivers(res.data);

            }


            else if(Array.isArray(res.data.drivers)){

                setDrivers(res.data.drivers);

            }


            else if(Array.isArray(res.data.data)){

                setDrivers(res.data.data);

            }


            else{

                setDrivers([]);

                console.log(
                    "Invalid driver response"
                );

            }



        }


        catch(err){


            console.log(err);


            alert(

                err.response?.data?.message ||

                "Failed to load drivers"

            );


        }


    }







    async function handleAdd(e){


        e.preventDefault();



        try{


            await addDriver(form);



            setOpen(false);



            setForm({

                name:"",
                license:"",
                phone:"",
                status:"Available"

            });



            loadDrivers();



        }


        catch(err){


            console.log(err);


            alert(

                err.response?.data?.message ||

                "Failed to add driver"

            );


        }


    }









    const filtered = Array.isArray(drivers)


    ? drivers.filter(driver =>


        driver.name

        ?.toLowerCase()

        .includes(

            search.toLowerCase()

        )


    )


    : [];









    const tableData = filtered.map(driver => ({


        ID:

        driver._id

        ?

        driver._id.slice(-5).toUpperCase()

        :

        "N/A",


        Name:

        driver.name,


        License:

        driver.license,


        Status:

        driver.status



    }));









return(


<div className="relative overflow-hidden">





{/* Background Decorations */}



<div

className="
absolute
-top-24
-right-10
w-72
h-72
bg-blue-200
rounded-full
blur-3xl
opacity-40
"

/>




<div

className="
absolute
bottom-0
-left-20
w-80
h-80
bg-purple-200
rounded-full
blur-3xl
opacity-40
"

/>









{/* Header */}



<div

className="
flex
justify-between
items-center
mb-10
relative
"

>


<div>



<div

className="
flex
items-center
gap-3
mb-3
"

>


<div

className="
p-3
rounded-2xl
bg-gradient-to-br
from-blue-200
to-purple-200
text-blue-700
"

>

<Users size={25}/>

</div>




<span

className="
text-sm
font-medium
text-blue-600
"

>

Team Management

</span>



</div>








<h1

className="
text-5xl
font-extrabold
text-gray-800
"

>

Drivers

</h1>





<p

className="
text-gray-500
mt-3
text-lg
"

>

Manage driver availability and assignments

</p>




</div>









<Button

className="w-auto"

onClick={()=>setOpen(true)}

>


<span

className="
flex
items-center
gap-2
"

>


<UserPlus size={18}/>


Add Driver


</span>


</Button>





</div>









{/* Search Box */}



<div

className="
mb-8
bg-white/70
backdrop-blur-xl
p-5
rounded-[2rem]
border
border-white
shadow-sm
"

>



<div

className="
flex
items-center
gap-2
mb-4
text-purple-600
"

>


<Sparkles size={18}/>


<span className="font-medium">

Find Driver

</span>


</div>





<SearchBar


value={search}


onChange={(e)=>setSearch(e.target.value)}


placeholder="Search Driver..."


/>



</div>









{/* Table */}



<Card>


<Table


columns={[

"ID",

"Name",

"License",

"Status"

]}


data={tableData}


/>


</Card>









{/* Add Driver Modal */}



<Modal


isOpen={open}


onClose={()=>setOpen(false)}


title="Add New Driver"



>


<form onSubmit={handleAdd}>




<Input


label="Driver Name"


placeholder="Enter driver name"


value={form.name}


onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}


/>








<Input


label="License"


placeholder="LMV / HMV"


value={form.license}


onChange={(e)=>

setForm({

...form,

license:e.target.value

})

}


/>







<Input


label="Phone"


placeholder="Phone number"


value={form.phone}


onChange={(e)=>

setForm({

...form,

phone:e.target.value

})

}


/>








<select


className="
w-full
border
rounded-xl
px-4
py-3
mb-5
"


value={form.status}


onChange={(e)=>

setForm({

...form,

status:e.target.value

})

}


>


<option>

Available

</option>


<option>

On Duty

</option>


<option>

Leave

</option>


</select>








<Button type="submit">


Save Driver


</Button>




</form>



</Modal>







</div>


);


}