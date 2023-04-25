import mlbStadiums from '../data/mlbStadiums';
import redisClient from '../clients/redisClient';
import { getWeather } from '../clients/OpenWeatherApiClient';
import OpenWeatherForecastItem from '../types/OpenWeatherForecastItem';
import { Weather } from 'types/Weather';

const pullWeather = async () => {
  const results = await Promise.all(
    Array.from(mlbStadiums.keys()).map(async (stadiumName) => {
      const stadiumInfo = mlbStadiums.get(stadiumName);
      if (!stadiumInfo) {
        console.log(`Unable to find ${stadiumName} in mlb stadium map - something is wrong!`)
        return null;
      }

      const { latitude, longitude } = stadiumInfo;

      let weather;
      try {
        weather = await getWeather(latitude, longitude);
      } catch (e) {
        console.error(e);
        weather = null;
      }
      return { stadiumName, weather };
    })
  );

  results.forEach(async (result) => {
    if (result) {
      const data: Weather[] = result.weather.list.map((forecastItem: OpenWeatherForecastItem) => {
          const weather: Weather = {
            timestamp: forecastItem.dt,
            temperature: forecastItem.main.temp,
            main: forecastItem.weather[0].main, // forecastItem.weather is an array which always contains one element.
            description: forecastItem.weather[0].description,
            wind: {
              speed: forecastItem.wind.speed,
              degree: forecastItem.wind.deg,
            },
          };

          return weather;
        }
      );

      try {
        await redisClient.set(result?.stadiumName, JSON.stringify(data));
      } catch (e) {
        console.error(e);
      }
    }
  });
};

export default pullWeather;
