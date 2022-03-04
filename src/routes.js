import { Router } from "express";
import { captureTemperature } from "./services/captureTemperature"

const router = Router();

const capturTempe = new captureTemperature();

router.get("/", capturTempe);
