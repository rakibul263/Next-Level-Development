type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

type productSummary = Pick<Product, "id" | "name" | "price">;
type productWithoutStock = Omit<Product, "stock" | "color">;
type productWithColor = Required<Product>;

const Laptop: productWithColor = {
  id: 23842,
  name: "Apple",
  price: 120000,
  stock: 4,
  color: "black",
};

type optionalProduct = Partial<Product>;
type productReadOnlyMode = Readonly<Product>;
