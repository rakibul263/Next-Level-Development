import fs from "fs/promises";
import path from "node:path";
import type { Order } from "../type";

const DB_PATH = path.join(import.meta.dirname!, "..", "..", "db", "data.json");

class OrderServices {
  private async readData(): Promise<Order[]> {
    try {
      const data = await fs.readFile(DB_PATH, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading data:", error);
      return [];
    }
  }
  private async writeData(data: Order[]) {
    await fs.writeFile(DB_PATH, JSON.stringify(data));
  }

  //   get Data
  async get() {
    const data = await this.readData();
    return data;
  }
  //   get by id
  async getById(id: number) {
    const data = await this.readData();
    return data.find((order) => order.id === id) || null;
  }
  //   create function
  async create(order: Omit<Order, "id">) {
    const data = await this.readData();
    const newOrder = {
      id: Date.now(),
      ...order,
    };
    data.push(newOrder);
    await this.writeData(data);
  }
  //   update data
  async update(id: number, updates: Partial<Omit<Order, "id">>) {
    const data = await this.readData();
    const i = data.findIndex((order) => order.id === id);

    if (i === -1) return null;
    data[i] = { ...data[i], ...updates } as Order;
    await this.writeData(data);
    return data[i];
  }

  //   delete data
  async delete(id: number) {
    const data = await this.readData();
    const i = data.findIndex((order) => order.id === id);
    if (i === -1) return null;
    data.splice(i, 1);
    await this.writeData(data);
    return true;
  }
}

export const orderService = new OrderServices();

