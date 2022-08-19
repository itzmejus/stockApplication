import newStockModel from "../models/stockModel.js";

export const getStockDataController = async (req, res) => {
  newStockModel.find({}, (err, stock) => {
    if (err) {
      res.send(err);
    }
    res.send(stock);
  });
};

export const getStockDataByWord = async (req, res) => {
  const word = req.body;
  console.log(word);
  newStockModel.find({ $text: { $search: "Bhansali" } }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};
