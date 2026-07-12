require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");


// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const vehicleRoutes = require("./routes/vehicles");
const driverRoutes = require("./routes/drivers");
const tripRoutes = require("./routes/trips");
const maintenanceRoutes = require("./routes/maintenance");
const fuelRoutes = require("./routes/fuel");
const expenseRoutes = require("./routes/expenses");



const app = express();



// Database Connection
connectDB();



// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);


app.use(express.json());




// API Routes

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/vehicles", vehicleRoutes);

app.use("/api/drivers", driverRoutes);

app.use("/api/trips", tripRoutes);

app.use("/api/maintenance", maintenanceRoutes);

app.use("/api/fuel", fuelRoutes);

app.use("/api/expenses", expenseRoutes);




// Health Check

app.get("/", (req,res)=>{

    res.send("TransitOps Backend Running");

});





const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>{

    console.log(`Server Running on Port ${PORT}`);

});