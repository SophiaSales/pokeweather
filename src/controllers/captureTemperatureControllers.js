import captureTemperature from "../services/captureTemperatureServices";

const captureTempControllers = async (req, res) =>{
    try {
        const cidade = req.query.cidade;
        const data = await captureTemperature(cidade);
        return res.send(data)
    } catch (error) {
    }
}
export default captureTempControllers;