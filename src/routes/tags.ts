import { Router } from "express";
import { CreateTagController } from "../controllers/CreateTagController";

const router = Router();

const createTagController = new CreateTagController();
router.post("/", createTagController.handle);

export default router;
