const {Router}= require('express');
const fs= require('fs');
const product= Router();


 product.get('/',(req,res)=>{
    const data= fs.readFileSync('./product.json','utf-8')
    const products= JSON.parse(data).products;
    res.send(products);
 })

 product.post('/create',(req,res)=>{
   const product= req.body;
   const prev_data= fs.readFileSync('./product.json','utf-8')
   const parsed_prev_data= JSON.parse(prev_data);
   const products= parsed_prev_data.products;
   products.push(product);
   const latesh_products= JSON.stringify(parsed_prev_data)

   fs.writeFileSync('./product.json',latesh_products,'utf-8')

   res.send('product created');
})

product.put('/:productId',(req,res)=>{
  const product_id= req.params.productId;
  const product= req.body;
  const prev_data= fs.readFileSync('./product.json','utf-8');
  const parsed_prev_data= JSON.parse(prev_data);
  const old_products= parsed_prev_data.products;
  const new_products= old_products.map(prod=>{
    if(prod.id===product_id){
        return product;
    }
    else{
        return prod;
    }
  })
  parsed_prev_data.products=new_products;
  const latest_products=JSON.stringify(parsed_prev_data);
  fs.writeFileSync('./product.json',latest_products,'utf-8');
  res.send('product modified');
})

product.delete('/',(req,res)=>{

})





module.exports=product;