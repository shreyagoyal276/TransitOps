import Card from "../components/Card";
import Table from "../components/Table";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";

export default function Maintenance() {

    const records = [

        {

            Vehicle: "Tata Ace",

            Type: "Oil Change",

            Date: "12 Jul 2026",

            Status: <StatusBadge status="Completed"/>

        },

        {

            Vehicle: "Ashok Leyland",

            Type: "Brake Service",

            Date: "15 Jul 2026",

            Status: <StatusBadge status="Pending"/>

        },

        {

            Vehicle: "Eicher Pro",

            Type: "Tyre Replacement",

            Date: "18 Jul 2026",

            Status: <StatusBadge status="In Shop"/>

        }

    ];

    return (

        <>

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Maintenance

                    </h1>

                    <p className="text-gray-500">

                        Vehicle Service Records

                    </p>

                </div>

                <Button className="w-auto">

                    + Schedule Service

                </Button>

            </div>

            <Card>

                <Table

                    columns={[

                        "Vehicle",

                        "Type",

                        "Date",

                        "Status"

                    ]}

                    data={records}

                />

            </Card>

        </>

    );

}