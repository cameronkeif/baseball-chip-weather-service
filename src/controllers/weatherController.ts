import { Request, Response } from 'express';
import mlbStadiums from '../data/mlbStadiums';
import redisClient from '../clients/redisClient';

export const getWeather = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await Promise.all(
    Array.from(mlbStadiums.keys()).map(async (stadiumName) => {
      const stadiumInfo = mlbStadiums.get(stadiumName);
      if (!stadiumInfo) { // Should never happen since the map is hard-coded.
        return Promise.resolve(null);
      }

      const weather = await redisClient.get(stadiumName);
      return { stadiumName, weather: weather ? JSON.parse(weather) : null };
    })
  );

  return res.json(results);
};

export default {
  getWeather,
};
