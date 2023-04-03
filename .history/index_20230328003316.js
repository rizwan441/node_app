const http  = require ("http")

const server=http.createServer(()=>{
    console.log("server is running");
});

server.listen(5000,())
