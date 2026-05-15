import type { IncomingMessage, ServerResponse } from "node:http";

export type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" ;
export type Res = ServerResponse;
export type Req = IncomingMessage & {
    method : "Method"
}

export interface Order {
  id: number;
  customer: string;
  quantity: number;
  food: string;
  price: number;
}
