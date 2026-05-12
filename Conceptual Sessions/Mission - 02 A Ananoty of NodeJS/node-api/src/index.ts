import { createServer, IncomingMessage } from "node:http";
import { sendResponse } from "./utils";
import { orderRoute } from "./routes/order.route";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, { message: "Welcome to our foodi server" }, 200);
    return;
  } else if (url.startsWith("/order")) {
    orderRoute(req, res);
  } else {
    sendResponse(res, { message: "Not Found" }, 404);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
