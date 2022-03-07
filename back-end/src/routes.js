import { Router } from "express";
import UsersController from "./controllers/UsersController";
import SessionController from "./controllers/SessionController";
import helloController from "./controllers/helloController";
import RepositoriesController from "./controllers/RepositoryController";
import auth from "./middlewares/auth";

const routes = new Router();

// User routes

routes.post("/sessions", SessionController.create);
routes.get("/hello", helloController.index);

routes.use(auth);

routes.get("/users", UsersController.index);

routes.post("/users", UsersController.create);

routes.get("/users/:id", UsersController.show);

routes.put("/users/:id", UsersController.update);

routes.delete("/users/:id", UsersController.destroy);

// Repositories routes

routes.get("/users/:user_id/repositories", RepositoriesController.index);

routes.post("/users/:user_id/repositories", RepositoriesController.create);

routes.delete(
  "/users/:user_id/repositories/:id",
  RepositoriesController.destroy
);

export default routes;
