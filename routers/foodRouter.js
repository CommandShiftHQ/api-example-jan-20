const express = require('express');

const foodRouter = express.Router();

foodRouter.get("/food", () => {
    // do stuff
})

foodRouter.post("/food", () => {
    // do stuff
})

foodRouter.delete("/food", () => {
    // do stuff
})

foodRouter.put("/food", () => {
    // do stuff
})

foodRouter.get("/food/:coordinate/deals", () => {
    // do stuff
})

module.exports = foodRouter;