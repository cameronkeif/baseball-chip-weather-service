export type Weather = {
  timestamp: number;
  temperature: number;
  main: string;
  wind: {
    speed: number;
    degree: number;
  };
};
