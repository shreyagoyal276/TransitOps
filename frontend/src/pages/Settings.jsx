import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Settings() {

    return (

        <>

            <h1 className="text-3xl font-bold mb-8">

                Settings

            </h1>

            <Card title="Company Information">

                <Input

                    label="Company Name"

                    value="TransitOps Pvt Ltd"

                />

                <Input

                    label="Email"

                    value="info@transitops.com"

                />

                <Input

                    label="Phone"

                    value="+91 9876543210"

                />

                <Button className="w-auto mt-4">

                    Save Changes

                </Button>

            </Card>

            <Card

                title="System Preferences"

                className="mt-8"

            >

                <div className="space-y-4">

                    <label>

                        <input

                            type="checkbox"

                            defaultChecked

                        />

                        <span className="ml-3">

                            Email Notifications

                        </span>

                    </label>

                    <label>

                        <input

                            type="checkbox"

                            defaultChecked

                        />

                        <span className="ml-3">

                            Auto Backup

                        </span>

                    </label>

                    <label>

                        <input

                            type="checkbox"

                        />

                        <span className="ml-3">

                            Dark Mode

                        </span>

                    </label>

                </div>

            </Card>

        </>

    );

}