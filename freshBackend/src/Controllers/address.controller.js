const addressModel = require("../Models/address.model");
const mongoose= require("mongoose");

const registerAddress = async (req, res) => {
  try {
    const {
      exactAdd,
      country,
      state,
      city,
      village,
      district,
      po,
      pin,
      userId,
    } = req.body;
    if (!exactAdd || !country || !state || !pin || !userId)
      return res.send({ message: "Some fields are missing" });

    const address = await addressModel.create(req.body);
    if (!address)
      return res
        .status(400)
        .send({ success: false, message: "Unable to add address" });
    return res
      .status(201)
      .send({
        success: true,
        message: "Address added successfully",
        add: address,
      });
  } catch (err) {
    return res.status(500).send({ sucess: false, message: err.message });
  }
};

const gettingAddress = async (req, res) => {
    console.log('helo')
  try {
    //const  userId  = new mongoose.ObjectId(req.query.userId);
    // console.log(req.query)
    // if (!userId)
    //   return res
    //     .status(200)
    //     .send({ success: true, message: "UserId not found" });

    // const address = await addressModel.find({ userId:userId });
    // if (!address) {
    //   return res.status(400).send({ message: "Address not found" });
    // }
    return res.status(201).send("address");
  } catch (err) {
    return res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = { registerAddress, gettingAddress };
