import { response } from "express";
import captureTemperature from "../services/captureTemperatureServices";

async function captureTempControllers(){
    try {
        const captureTemperature = new captureTemperature();
        const temp = await captureTemperature.captureTemperature();
        return response.json(temp);
    } catch (error) {
        
    }
}
export default captureTempControllers();