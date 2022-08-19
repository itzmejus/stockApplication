import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getStockDataByWord, getStockDataController } from "./Controllers/stockData.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const dburl =
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/Data?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });

app.get("/stock", getStockDataController);
app.get("/word",getStockDataByWord)
app.get("/", (req, res) => {
  res.send("hello connected");
});

app.listen(5000, () => console.log(`server is runnig at ${PORT}`));
