import { log } from "node:console";
import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";
import { routeHandle } from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandle(req, res);
  },
);

server.listen(3000, () => {
  console.log("The server is running at 3000 port");
});
