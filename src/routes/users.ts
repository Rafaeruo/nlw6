import { Router } from "express";
import { CreateUserController } from "../controllers/CreteUserController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/", createUserController.handle);

export default router;
