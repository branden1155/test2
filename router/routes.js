const express = require("express");
const router = express.Router();

// http://localhost:3000/45
// ID = 45
// - GET
router.get("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `GET - http://${req.hostname}:${process.env.port}/${id}`,
        metadata: {
            method: req.method,
            port: process.env.port,
            ID: id,
        }
    })
});
// http://localhost:3000/89
// ID = 89
// - PATCH
router.patch("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `PATCH - http://${req.hostname}:${process.env.port}/${id}`,
        metadata: {
            method: req.method,
            port: process.env.port,
            ID: id,
        }
    })
})
// http://localhost:3000/89
// ID = 89
// - PUT
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `PUT - http://${req.hostname}:${process.env.port}/${id}`,
        metadata: {
            method: req.hostname,
            port: process.env.port,
            ID: id,
        }
    })
})
// http://localhost:3000/9
// ID = 9
// - DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `DELETE - http://${req.hostname}:${process.env.port}/${id}`,
        metadata: {
            method: req.hostname,
            port: process.env.port,
            ID: id,
        }
    })
})
module.exports = router;