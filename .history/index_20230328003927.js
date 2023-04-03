const http  = require ("http")

const server=http.createServer((req,res)=>{
   res.end("noice")
});

server.listen(5000,()=>{
 console.log("server is running");
})
