import  Router from "express";
import captureTempControllers from "./controllers/captureTemperatureControllers";

const router = new Router();

router.all("/", captureTempControllers);

export default router ;
