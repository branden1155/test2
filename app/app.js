const express = require("express");
const router = require("../router/routes");
const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// set up router
app.use("/", router);

// Setting up GET without ID
app.get("/", (req, res, next) => {
    res.json({
        message: "You are using - GET without ID",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }    
    })
});
// Setting up POST without ID
app.post("/", (req, res, next) => {
    res.json({
        message:"You are using - POST without ID",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        } 
    })
});

// adding middleware to handle errors or bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND.");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

module.exports = app;