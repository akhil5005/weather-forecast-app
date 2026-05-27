const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=0b2d2965ccc34a73833130001260604";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json()
};

export const getWeatherDataForLocation = async (lat,lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
