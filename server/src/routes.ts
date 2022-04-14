import { Router } from "express";
import listController from "./controllers/listController";

const routes = Router();

routes.get("/", listController.getAll);
routes.post("/", listController.save);
routes.put("/:id", listController.update);

export default routes;
