import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserReceivedComplimentsController } from "../controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "../controllers/ListUserSentComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
router.post("/", createUserController.handle);

const listUserSentComplimentsController =
  new ListUserSentComplimentsController();
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();
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
