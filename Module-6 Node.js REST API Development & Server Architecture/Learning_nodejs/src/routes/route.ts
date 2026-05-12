import { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";
export const routeHandle = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.end(
      JSON.stringify({
        message: "Home Route",
      }),
    );
  } else if (url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(404);
    res.end(
      JSON.stringify({
        message: "Route Not Found",
      }),
    );
  }
};
