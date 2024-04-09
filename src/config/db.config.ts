import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const connectDb = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("Db conected😪"))
    .catch((err) => console.log(err));
};
