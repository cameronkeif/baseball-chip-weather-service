export type Weather = {
  timestamp: number;
  temperature: number;
  main: string;
  description: string;
  wind: {
    speed: number;
    degree: number;
  };
};
