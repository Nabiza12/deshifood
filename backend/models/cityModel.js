const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  District: {
    type: String,
  },
  Division: {
    type: String,
  },
  famousFood: [
    {
      id: Number,
      foodName: String,
      image: String,
      price: String,
      Discount: String,
    },
  ],
  ImageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("City", citySchema);