
  const http= require('http');
  const fs= require('fs');



  const server= http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url==='/post' ) {
        let arrp=[
            {
            "postId": 1,
            "id": 1,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
          },
          {
            "postId": 1,
            "id": 2,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          }
        ]
        res.end(JSON.stringify(arrp));
    }
    else if(req.url==='/comments'){
     let arr=[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]
    res.end(JSON.stringify(arr))
    }
    else if(req.url==='/march'){
        let obj={
            no_of_ref:54,
            suc_ref:34,
            perc:'80%',
        }
        res.end(JSON.stringify(obj))
    }
    else if(req.url==='/bench'){
              fs.readFileSync('./data.txt',{encoding:'utf-8'},(err,data)=>{
               if(er){
                return res.end('server crashed')
               }
                return res.end(data);
              })
    }
    else{
         res.end('Welcome to homepage')
    }
  })


  server.listen(8000,()=>{
    console.log('Listening on 8000')
  })