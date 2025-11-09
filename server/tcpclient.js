import net from "net";

// Connect to the TCP server
const client = new net.Socket();

client.connect(8080, "127.0.0.1", () => {
  console.log("Client: Sending SYN");
  client.write("SYN");
});

client.on("data", (data) => {
  console.log(`I(client) received ${data}`);

        //console.log(data);-->//<Buffer 53 59 4e 2d 41 43 4b>
        
  if (data.toString() === "SYN-ACK") {
    setTimeout(() => {
      console.log("Client → Sending ACK");
      client.write("ACK");
    }, 1000);

    setTimeout(() => {
      console.log("Client → Sending DATA: Hello Server!");
      client.write("DATA: Hello Server!");
    }, 2000);

    setTimeout(() => {
      console.log("💻 Client → Sending FIN (close)");
      client.end();
    }, 3000);
  }
});

client.on("end", () => {
  console.log("Client: Connection closed");
});
