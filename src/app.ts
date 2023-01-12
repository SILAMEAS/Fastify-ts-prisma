import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";
import { UserRoute } from "./routes/userRoute";
import cors from "@fastify/cors";

// create server
const server: FastifyInstance = fastify();
// create middleware
const port = 3001;
server.register(cors);
server.register(UserRoute, { prefix: "/user" });
async function Running() {
  await server.listen({ port: port, host: "10.2.50.9" }, (err, add) => {
    if (err) {
      server.log.error(err);
    }
    console.log("server running on port " + port);
  });
}
Running();
