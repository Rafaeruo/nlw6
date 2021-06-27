import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserReceivedComplimentsController } from "../controllers/ListUserReceivedComplimentsController";
import { ListUsersController } from "../controllers/ListUsersController";
import { ListUserSentComplimentsController } from "../controllers/ListUserSentComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
router.post("/", createUserController.handle);

const listUserSentComplimentsController =
  new ListUserSentComplimentsController();
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();
const listUsersController = new ListUsersController();
router.get("/", ensureAuthenticated, listUsersController.handle);
router.get(
  "/compliments/sent",
  ensureAuthenticated,
  listUserSentComplimentsController.handle
);
router.get(
  "/compliments/received",
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle
);

export default router;
