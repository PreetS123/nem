const mongoose= require("mongoose");

const connection= async()=>{
    try {
        return await mongoose.connect(`mongodb+srv://PreetiS123:PreetiMongo@cluster0.15tkpj3.mongodb.net/`);
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports=connection;