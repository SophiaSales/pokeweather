import axios from "axios";

const captureTemperature = async (cidade) => {
    try {
        const urlTemp = process.env.URL_CLIMA;
        const paramsTemp = {
            params:{ 
                q: cidade,
                appid: process.env.KEY
            }
        }
        const result = await axios.get(urlTemp, paramsTemp);
        console.log(result.data);
        return (result.data)
    } catch (error) {
        console.log(error);
    }
};
export default captureTemperature;
