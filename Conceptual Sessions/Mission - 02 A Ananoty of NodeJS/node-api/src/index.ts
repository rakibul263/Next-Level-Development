import { createServer, IncomingMessage } from "node:http";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is Home Route" }));
  } else {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
