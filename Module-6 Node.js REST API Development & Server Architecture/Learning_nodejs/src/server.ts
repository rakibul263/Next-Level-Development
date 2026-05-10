import { createServer, IncomingMessage, Server } from "node:http";

const server: Server = createServer((req: IncomingMessage, res) => {
  const url = req.url;
  const method = req.method;

  // if (url === "/" && method === "GET") {
  //   res.end("You are now in home Root.");
  // } else if (url === "/about" && method === "GET") {
  //   res.end("You are  now in about Root");
  // } else {
  //   res.end("404 ERROR\nPage not found");
  // }

  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.end(JSON.stringify({ success: true, message: "Hello API" }));
});

server.listen(3000, () => {
  console.log("server is running in port 3000");
});
