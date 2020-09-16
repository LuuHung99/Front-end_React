// Thuc hanh call data tu server
// import thu  vien axios
const axios = require('axios');
const getDataCoronaFromApi =  async (cityName = 'Tokyo') => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi&fbclid=IwAR31nEWoNV1u63D-QRaud4aa5oD7GUwJkQ8ifylT1JQVGBP7HqFvrf0MgNA`;
  const response = await axios.get(urlApi);
  const data = await response.status === 200 ? response.data : [];
  return data;
}

const showData = async () => {
  const data = await getDataCoronaFromApi('HaNoi');
  console.log(data);
}

const showDataV2 = () => {
  getDataCoronaFromApi('Bangkok').then(data => console.log(data))
                                .catch(error => console.log(error));
}

// showData();
showDataV2();