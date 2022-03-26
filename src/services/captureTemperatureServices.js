import axios from "axios";
const captureTemperature = async (cidade) => {
    try {
        const urlTemp = process.env.URL_CLIMA;
        const appid =  process.env.KEY;
        
        const result = await axios.get(`${urlTemp}?q=${cidade}&appid=${appid}&units=metric`);
        const dados = {
            cidade: result.data.name,
            temperatura: result.data.main.temp,
            descricao: result.data.weather[0].description
        }
        console.log(dados);
        return (dados);
    } catch (error) {
        console.log(error);
    }
};
export default captureTemperature;
