const express= require('express');
const dnsRoute= require('./routes/dns.routes');
const productRoutes= require('./routes/product.routes');


const app= express();
app.use(express.json())

app.use('/dns',dnsRoute);
app.use('/product',productRoutes)


app.listen(7000,()=>{
    console.log('Listening on Port 7000')
})