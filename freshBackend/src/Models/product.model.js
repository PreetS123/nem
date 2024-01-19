const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    prodType: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey:false //_v would not be in database
  }
);

const productModel=mongoose.model("product",productSchema);

module.exports = productModel;
