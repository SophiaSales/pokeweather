import  Router from "express";
import captureTemperature from "./services/captureTemperatureServices";

const router = new Router();

router.all("/", async(req, res) => {
    const cidade = req.query.cidade;
    const data = await captureTemperature(cidade);
    return res.send(data)
});

export default router ;
