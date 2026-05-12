import { createServer, IncomingMessage } from "node:http";
import { sendResponse } from "./utils";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, { message: "Welcome to our server" }, 200);
  } else {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
