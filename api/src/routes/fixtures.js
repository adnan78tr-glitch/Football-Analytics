import { Router } from "express";
import { getLiveFixtures } from "../controllers/fixturesController.js";

const router = Router();

router.get("/", getLiveFixtures);

export default router;