export type OpenWeatherForecastItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
};

export default OpenWeatherForecastItem;
