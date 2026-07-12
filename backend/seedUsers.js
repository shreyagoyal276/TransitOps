require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

async function seedUsers() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        await User.deleteMany({});

        const users = [

            {

                name: "Fleet Manager",

                email: "manager@transitops.com",

                password: await bcrypt.hash("manager123", 10),

                role: "fleet_manager"

            },

            {

                name: "Dispatcher",

                email: "dispatcher@transitops.com",

                password: await bcrypt.hash("dispatch123", 10),

                role: "dispatcher"

            },

            {

                name: "Safety Officer",

                email: "safety@transitops.com",

                password: await bcrypt.hash("safety123", 10),

                role: "safety_officer"

            },

            {

                name: "Financial Analyst",

                email: "finance@transitops.com",

                password: await bcrypt.hash("finance123", 10),

                role: "financial_analyst"

            }

        ];

        await User.insertMany(users);

        console.log("Default Users Created Successfully");

        process.exit();

    }

    catch (err) {

        console.log(err);

        process.exit(1);

    }

}

seedUsers();