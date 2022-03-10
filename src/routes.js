import  Router from "express";
import captureTemperature from "./services/captureTemperatureServices";

const router = new Router();

router.all("/", async(req, res) => {
    const data = await captureTemperature('porto')
    res.send(data)
});

export default router ;
