const axios = require('axios');
const getDataCoronaFromApi =  async () => {
  const urlApi = `https://api.themoviedb.org/3/search/movie?query=badman&api_key=cfe422613b250f702980a3bbf9e90716&fbclid=IwAR31nEWoNV1u63D-QRaud4aa5oD7GUwJkQ8ifylT1JQVGBP7HqFvrf0MgNA`;
  const response = await axios.get(urlApi);
  const data = await response.status === 200 ? response.data : [];
  return data;
}
export default getDataCoronaFromApi;