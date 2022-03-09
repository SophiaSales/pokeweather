import  Router from "express";
import captureTemperature from "./services/captureTemperatureServices"

const router = new Router();

router.get("/", captureTemperature);

export default router ;
