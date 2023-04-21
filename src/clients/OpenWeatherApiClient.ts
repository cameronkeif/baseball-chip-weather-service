import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export const getWeather = async (latitude: number, longitude: number) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`;
  const response = await axios.get(url, {
    headers: {
      'Accept-Encoding': 'application/json',
    },
  });

  return response.data;
};

export default {
  getWeather,
};
