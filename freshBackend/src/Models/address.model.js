const mongoose = require("mongoose");

const addressSchemas = new mongoose.Schema(
  {
    exactAdd: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: false },
    village: { type: String, required: false },
    district: { type: String, required: true },
    po: { type: String, required: false },
    pin: { type: Number, required: true },
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

 const addressModel= mongoose.model("useraddress",addressSchemas);

 module.exports=addressModel;