import express from "express";
require("dotenv").config(); // đọc file .env
import authApi from "./router/authApi";
import configCORS from "./config/cors";
// chatbox
const http = require("http");

const app = express();
app.use(configCORS);

// -> fix bug lưu img : request entity too large react
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//-------------------------------------------------------------------------------------
// share localHost BE & FE
authApi(app);

app.use((req, res) => {
  return res.send("404 not found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`>>> jwt backend is running on the port ${PORT}`);
});
