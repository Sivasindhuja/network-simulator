import net from "net";

const client=net.createConnection({ port: 8080, host: "localhost" },()=>{
    const request= `GET / HTTP/1.1
Host: localhost
Connection: close
`;
  client.write(request);
});

client.on("data", (data) => {
  console.log("Received raw HTTP response:\n" + data.toString());
});

client.on("end", () => {
  console.log("Connection closed");
});