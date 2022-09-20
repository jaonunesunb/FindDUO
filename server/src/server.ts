import express from "express";

const App = express()

App.get("/games", (request, response) => {
    return response.json([]);
});

App.get("/games/:id/ads", (request, response) => {
    return response.json([]);
});

App.post("/ads", (request, response) => {
    return response.status(201).json([]);
});

App.get("/ads/:ads/discord", (request, response) => {
    return response.json([]);
});

App.listen(3333)