import { Router } from "express";
import { CreateTagController } from "../controllers/CreateTagController";
import { ListTagsController } from "../controllers/ListTagsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
router.post("/", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.get("/", ensureAuthenticated, listTagsController.handle);

export default router;
