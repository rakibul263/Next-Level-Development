import { createServer } from "node:http";
import { orderRoute } from "./routes/order.route";
import { sendResponse } from "./utils";
import type { Req } from "./type";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, { message: "welcome to our Foodi server." }, 200);
    return;
  } 
  if (url.startsWith("/order")) {
    orderRoute(req as Req, res);
    return;
  }
  sendResponse(res, { message: "Page Not Found" }, 404);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
