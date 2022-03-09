import axios from "axios";


async function captureTemperature() {
    const urlTemperature = process.env.URL_CLIMA;
    try {
        const result = await axios.get(urlTemperature);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export default captureTemperature();
