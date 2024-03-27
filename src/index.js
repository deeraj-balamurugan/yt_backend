import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("----------error---------", err);
      throw err;
    });
    app.listen(port || 8000, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed", err);
  });
