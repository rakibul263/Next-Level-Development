import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const urlParts = url?.split("/") || [];
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  console.log("this is the actual id : ", id);

  if (url === "/products" && method === "GET") {
    const products = readProduct();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products Route",
        data: products,
      }),
    );
  } else if (id !== null && method === "GET") {
    const products = readProduct();
    const product = products.find((p: IProduct) => p.id === id);
    res.writeHead(product ? 200 : 404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: product ? "Product found" : "Product not found",
        data: product || null,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product created",
        data: null,
      }),
    );
  }
};
