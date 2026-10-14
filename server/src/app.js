import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "KADR API" });
});

app.use("/api/movies", moviesRouter);

app.listen(PORT, () => {
  console.log(`KADR API запущен: http://localhost:${PORT}`);
});
