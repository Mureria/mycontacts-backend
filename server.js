const express= require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config;


const app = express();
connectDb();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contatctRoute"))
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});