import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server:Server = createServer((req: IncomingMessage,res:ServerResponse)=>{
    const url = req.url ?? "/";

    if(url ==="/"){
        res.writeHead(200,{"content-type": "application/json"});
        res.end(JSON.stringify({message:"OK Lets see"}))
    }
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({message: "Route not found"}))
})

server.listen(4000,()=>{
    console.log("running on 4k");
})