import { Request, Response } from 'express';
import mlbStadiums from '../data/mlbStadiums';
import redisClient from '../clients/redisClient';
import Weather from '../types/Weather';

export const getWeather = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await Promise.all(
    Array.from(mlbStadiums.keys()).map(async (stadiumName) => {
      const stadiumInfo = mlbStadiums.get(stadiumName);
      if (!stadiumInfo) {
        // Should never happen since the map is hard-coded.
        return Promise.resolve(null);
      }

      const weather = await redisClient.get(stadiumName);
      return { stadiumName, weather: weather ? JSON.parse(weather) : null };
    })
  );

  // TODO can this be combined with the above?
  const response = results.reduce((result: Map<string, Weather>, item) => {
    if (item?.stadiumName) {
      result.set(item.stadiumName, item?.weather);
    }
    return result;
  }, new Map<string, Weather>());

  return res.json(Object.fromEntries(response));
};

export default {
  getWeather,
};
