import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection fail !!", err);
  });

//first approch

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });

//     app.listen(process.env.PRORT, () => {
//       console.log(`app is listing on port${process.env.PRORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw err;
//   }
// })();
