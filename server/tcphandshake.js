import net from "net";

const server=net.createServer((socket)=>{
    console.log("Server:Received SYN");
    setTimeout(()=>{
        socket.write("SYN-ACK");
        console.log("I(server) sent SYN-ACK");
    },1000)

    socket.on("data",(data)=>{
        console.log(`I(server) recieved ${data}`);
    })

    socket.on("end", () => {
    console.log("I(server):Connection closed");
  })
})

//tcp server listening on port 8080 of the localhost
server.listen(8080, "127.0.0.1", () => {
  console.log("TCP Server running on port 8080");
});


