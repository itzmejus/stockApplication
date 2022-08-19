import mongoose from "mongoose";
const newStockSchema = new mongoose.Schema({
  S_No: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Current_Market_Price: {
    type: String,
    required: true,
  },
  Market_Cap: {
    type: String,
    required: true,
  },
  Stock_PE: {
    type: String,
    required: true,
  },
  Dividend_Yield: {
    type: String,
    required: true,
  },
  ROCE: {
    type: String,
    required: true,
  },
  ROE_Previous_Annum: {
    type: String,
    required: true,
  },
  Debt_to_Equity: {
    type: String,
    required: true,
  },
  EPS: {
    type: String,
    required: true,
  },
  Reserves: {
    type: String,
    required: true,
  },
  Debt: {
    type: String,
    required: true,
  },
});

const newStockModel = mongoose.model("dataFile", newStockSchema);
export default newStockModel;
