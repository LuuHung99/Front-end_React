import getDataCoronaFromApis from './service/movles';

const showData = async (p) => {
  const data = await getDataCoronaFromApis(p);
  console.log(data);
}
showData();

