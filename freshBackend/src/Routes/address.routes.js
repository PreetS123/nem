const {Router}= require("express");
const addRouter= Router();
const addressController= require("../Controllers/address.controller")

addRouter.route('/address').get(addressController.gettingAddress);
addRouter.route('/address').post(addressController.registerAddress)

module.exports=addRouter