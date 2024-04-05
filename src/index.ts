import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Db conected"));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome 😪😪" });
});

const port = 8090;

app.listen(port, () => {
  console.log(`Server is runing port on ${port}`);
});
