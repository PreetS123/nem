const express=require("express");
const productController = require("../Controllers/product.controller");

const prodRouter= express.Router();

//-> /api/create
prodRouter.route("/create").post(productController.createProd);
prodRouter.route("/update/:id").put(productController.updateSingleProd);
prodRouter.route("/:id").get(productController.getSingleProd);
prodRouter.route("/").get(productController.getAllProduct);
prodRouter.route("/delete/:id").delete(productController.deleteProd);


module.exports=prodRouter;
//http://localhost:5000/api/create
//http://localhost:5000/api/update/:id