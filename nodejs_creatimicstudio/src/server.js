require("dotenv").config();
import express from "express";
import configCORS from "./config/cors";

// Routers
import authApi from "./router/authApi";
// const corsMiddleware = require("./config/cors");

const app = express();

configCORS(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// connectDB();

authApi(app);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
