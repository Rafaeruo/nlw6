import { Router } from "express";

import users from "./users";
import tags from "./tags";
import auth from "./auth";
import compliments from "./compliments";

const router = Router();

router.use("/users", users);
router.use("/tags", tags);
router.use("/auth", auth);
router.use("/compliments", compliments);

export default router;
