import type { Req, Res } from "../type";
import orderService from "../service/order.service";
import { sendResponse } from "../utils";

export const orderRoute = async (req: Req, res: Res) => {
  const url = req.url ?? "/";

  if (req.method === "GET" && url === "/order") {
    const data = await orderService.get();
    sendResponse(res, data, 200);
  } else if (req.method === "POST" && url === "/order/create") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      const order = JSON.parse(body);
      const newOrder = await orderService.create(order);
      sendResponse(res, newOrder, 201);
    });
  }
};
