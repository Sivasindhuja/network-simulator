import net, { createConnection } from "net";
const PORT=8080
const server=net.createServer((socket)=>{
    socket.on("data",(data)=>{
        let stringData=data.toString();
        console.log(`recieved raw HTTP request from the client ${stringData}`);
    })
    const httpResponse = 
`HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 46

<html><body><h1>Hello from Mini HTTP!</h1></body></html>`;

    socket.write(httpResponse);
    socket.end();
})

server.listen(PORT, () => {
  console.log("HTTP Server running on http://localhost:8080/");
});