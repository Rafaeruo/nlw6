import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const router = Router();
const authenticateUserController = new AuthenticateUserController();
router.use("/", authenticateUserController.handle);

export default router;
