const express = require('express');
const app = express();
// const foodRouter = require('./routers/foodRouter');

app.get('/peanuts', (request, response) => {
    console.log("Someone wants peanuts!");
    response.send(`
    Calories: 567.
    Water: 7%
    Protein: 25.8 grams.
    Carbs: 16.1 grams.
    Sugar: 4.7 grams.
    Fiber: 8.5 grams.
    Fat: 49.2 grams. Saturated: 6.28 grams. Monounsaturated: 24.43 grams. Polyunsaturated: 15.56 grams. Omega-3: 0 grams. Omega-6: 15.56 grams. Trans: 0 grams.
    `);
});

// GET /food
// POST /food
// DELETE /food
// PUT /food
// GET /food/:coordinate/deals
/// app.use(foodRouter);



// GET /food
// POST /food
// DELETE /food
// PUT /food
// GET /food/:place/deals
app.get("/food/:place/deals/:maxPrice", (request, response) => {
    if(request.params.place === "Manchester") {
        if(request.params.maxPrice < 10) {
            return response.send("50% off Dry January on Mocktails @ McrCodes");
        }
    }
    response.send('No deals yet');
});



app.listen(3000);