import express, { json } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import emailRouter from "./routes/emailRoute.js";
const app = express();
app.use(cors())
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/", emailRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
