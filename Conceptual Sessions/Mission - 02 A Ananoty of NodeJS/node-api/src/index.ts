import { createServer, IncomingMessage } from "node:http";
import { sendResponse } from "./utils";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, { message: "Welcome to our server" }, 200);
    return;
  } else {
    sendResponse(res, { message: "Not Found" }, 404);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
