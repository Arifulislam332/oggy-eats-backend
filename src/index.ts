import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { connectDb } from "./config/db.config";
import myUserRoute from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is runing port on ${port}`);
});
