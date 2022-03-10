import axios from "axios";

const captureTemperature = async (cidade) => {
    try {
        const urlTemp = `https://api.openweathermap.org/data/2.5/weather`;
        const paramsTemp = {
            params:{ 
                q: cidade,
                appid: '486604d92b998a31e97ea5d05d143f29'}
            }
        const result = await axios.get(urlTemp, paramsTemp);
        console.log(result.data);
        return (result.data)
    } catch (error) {
        console.log(error);
    }
};
export default captureTemperature;
