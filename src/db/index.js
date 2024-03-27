import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
    console.log(
      `mongoDB connected - db host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("mongoDB connection failed", err);
    process.exit(1);
  }
};

export default connectDB;
