 const jwt= require('jsonwebtoken')

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send('Please login again');
    }
    const user_token= req.headers.authorization.split(' ')[1];
    let email;
    jwt.verify(user_token, 'secret', function(err, decoded) {
        if(err){
            res.send({message:'not authenticated'});
        }
        // console.log(decoded) 
        req.body.email=decoded.email;
        next();
      });
}

module.exports=authentication