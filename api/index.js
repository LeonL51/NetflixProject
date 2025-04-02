// Importing modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth"); 

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfully Connected!"))
.catch((err) => console.error(err));


app.use(express.json()); 
app.use("/api/auth", authRoute); 


// Start the server and listen on port 8800
app.listen(8800, () => {
    // Log a message when the server is successfully running
    console.log("Backend server is running!");
});
