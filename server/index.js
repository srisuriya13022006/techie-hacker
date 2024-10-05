require('dotenv').config();

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

let sugarRoutes = require('./routes/sugar.js')


const app = express();
const port = process.env.REACT_APP_PORT;

// middlewares
app.use(cors());

app.use(express.json());


// routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/sugar', sugarRoutes);


// connect to db
mongoose.connect(process.env.REACT_APP_ATLAS_URI)
    .then(() => {
        // listen to port
        app.listen(port, () => {
            console.log("connected to database && Server running on port: ", port);
        });
    })
    .catch((error) => {
        console.log(error);
    })
