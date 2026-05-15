import { orderService } from "../service/order.service";
import type { Req, Res } from "../type";
import { sendResponse } from "../utils";

export const orderRoute = async (req: Req, res: Res) => {
  const params = req.url?.split("/").filter(Boolean);

  if (req.method === "GET") {
    if (params?.[1]) {
      const id = Number(params[1]);
      const order = await orderService.getById(id);
      sendResponse(res, { message: "Order retrieved successfully", data: order }, order ? 200 : 404);
      return;
    }
    const orders = await orderService.get();
    sendResponse(res, { message: "Orders retrieved successfully", data: orders }, 200);
    return;
  }
};
