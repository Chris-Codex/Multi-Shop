//import modules
const express = require("express");
const app = express();
const cors = require("cors")
const mongose = require("mongoose");
require("dotenv/config")

//app
app.use(express.json());
app.use(cors());


//middleware
const loginroute = require("./routes/loginRoute")
const registeroute = require("./routes/registerRoute")
const productroute = require("./routes/productRoute")

//routes
app.use("/login", loginroute)
app.use("/register", registeroute)
app.use("/product", productroute)



//db
mongose.connect(process.env.CONNECT_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connectd to MongoDb"))
    .catch((error) => console.error(error))

//port 
app.listen(3001, () => {
    console.log("Listening to Port 3001")
})