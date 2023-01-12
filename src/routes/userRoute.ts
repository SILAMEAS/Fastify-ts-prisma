import { FastifyInstance } from "fastify/types/instance";
import {
  userAll,
  create,
  find,
  detele,
  update,
  deteleAll,
  check,
} from "../controller/userController";

interface IQuerystring {
  username: string;
  password: string;
}
interface IHeaders {
  "h-Custom": string;
}
export async function UserRoute(server: FastifyInstance) {
  // check user
  server.post("/check", async (req: any, res) => {
    try {
      const data = req.body;
      console.log("Route = ", data);
      res.code(200).send(await check(data));
    } catch (error) {
      res.code(500).send(error);
    }
  });
  // get one user
  server.get("/:id", async (req: any, res) => {
    try {
      res.code(200).send(await find(req.params.id));
    } catch (error) {
      res.code(500).send(error);
    }
  });
  // delete one user
  server.delete("/delete/:id", async (req: any, res: any) => {
    try {
      const user = await detele(req.params.id);

      res.code(200).send(user, { message: "succes" });
    } catch (error) {
      res.code(500).send(error);
    }
  });
  //get all users
  server.get("/", async (req: any, res) => {
    try {
      res.code(200).send(await userAll());
    } catch (error) {
      res.code(500).send(error);
    }
  });
  //delete all user
  server.delete("/delete/all", async (req: any, res) => {
    try {
      res.code(200).send(await deteleAll());
    } catch (error) {
      res.code(500).send(error);
    }
  });
  // create user
  server.post("/create", async (req: any, res) => {
    try {
      const data = req.body;
      res.code(200).send(await create(data));
    } catch (error) {
      res.code(500).send(error);
    }
  });
  // update user
  server.patch("/update/:id", async (req: any, res) => {
    try {
      const data = req.body;
      res.code(200).send(await update(data, req.params.id));
    } catch (error) {
      res.code(500).send(error);
    }
  });
}
