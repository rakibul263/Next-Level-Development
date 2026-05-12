import path from "node:path";
import type { Order } from "../type";
import fs from "fs/promises";

const DB_PATH = path.join(process.cwd(), "db", "data.json");

class OrderService {
  async readData(): Promise<Order[]> {
    try {
      const data = await fs.readFile(DB_PATH, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async writeData(data: Order[]): Promise<void> {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  }

  // GET
  async get() {
    const data = await this.readData();
    return data;
  }

  // create
  async create(order: Omit<Order, "id">): Promise<Order> {
    const data = await this.readData();
    const newOrder: Order = {
      ...order,
      id: String(Date.now()),
    };

    data.push(newOrder);
    await this.writeData(data);
    return newOrder;
  }
}

const orderService = new OrderService();
export default orderService;
