import mongoose from "mongoose";

let isConnected = false; // variable to check the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // prevent unkown field queries

  if (!process.env.MONGODB_URL) return console.log("mongo db url not found");

  if (isConnected) return console.log("Already Connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};
