const productModel = require("../Models/product.model");


const getAllProduct= async(req,res)=>{
  try{
    const products= await productModel.find();
    if(!products){
      return res.status(200).send({success:true,message:"No products"})
    }
     return res.status(201).send(products);
  }catch(err){
    return res.status(500).send({success:false,error:err.message})
  }
}

const getSingleProd = async (req, res) => {
  try {
    // console.log(req.params.id);
    const singleProd= await productModel.findOne({_id:req.params.id});
    if(!singleProd){
      return res.status(400).send({success:false,message:"Product not found"});
    }
    return res.status(201).send(singleProd);
  } catch (err) {
    return res.status(500).send({ success: false, error: err.message });
  }
};


const createProd = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    if (!product) {
      return res
        .status(400)
        .send({ success: false, message: "Unable to create product" });
    }
    return res.status(201).send({ success: true, message: "Product created" });
  } catch (err) {
    return res.status(500).send({ success: false, error: err.message });
  }
};

const updateSingleProd= async (req,res)=>{
  try{
    // console.log(req.params.id);
      if(!req.params.id){
        return res.status(200).send({success:true,message:"Product id not found"})
      }
      const singleProd= await productModel.findByIdAndUpdate(req.params.id);
      if(!singleProd){
        return res.status(200).send({success:false,message:"Product not found"});
      }
      return res.status(201).send({success:true,message:"Product updated"})
  }catch(err){
    return res.status(500).send({success:false,error:err.message});
  }
}

const deleteProd=async(req,res)=>{
    try{
      // console.log(req.params.id)
        if(!req.params.id){
          return res.status(200).send({success:true,message:"Product ID missing"});
        }
        const product = await productModel.findByIdAndDelete(req.params.id);
         return res.status(201).send({success:true,message:`Product ${product._id} deleted`});
    }catch(err){
      return res.status(500).send({success:false,error:err.message});
    }
}

module.exports = { getAllProduct,createProd,getSingleProd, updateSingleProd ,deleteProd};
