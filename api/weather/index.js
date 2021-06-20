const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const appId = '3bd6b4dfaf00ffd1efbad2ee2f9d8b90';

export async function getCurrent(city) {
  return await fetch(`${apiUrl}weather?q=${city}&APPID=${appId}&units=metric`);
}

export async function getCurrentByCityId(cityId) {
  return await fetch(`${apiUrl}weather?id=${cityId}&APPID=${appId}&units=metric`);
}

export async function getForecast(cityId) {
  return await fetch(`${apiUrl}forecast?id=${cityId}&APPID=${appId}&units=metric`);
}
