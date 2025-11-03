require("dotenv").config();
import express from "express";
// const connectDB = require("./config/db.config");

// Routers
import authApi from "./router/authApi";
// const corsMiddleware = require("./config/cors");

const app = express();

// app.use(corsMiddleware);

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
