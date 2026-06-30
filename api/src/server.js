import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import fixturesRouter from "./routes/fixtures.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "Football Analytics API",
    version: "1.0.0",
    status: "running"
  });
});

app.use("/api/live/fixtures", fixturesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("");
  console.log("==================================");
  console.log(" Football Analytics API");
  console.log("==================================");
  console.log(` Server : http://localhost:${PORT}`);
  console.log(" Status : Running");
  console.log("==================================");
  console.log("");
});