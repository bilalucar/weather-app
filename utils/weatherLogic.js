export const currentMapper = current => ({
  id: current.id,
  name: current.name,
  country: current.sys?.country,
  url: `weather/${current.id}`,
  icon:
    current?.weather?.length &&
    `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
  temp: current.main?.temp?.toString().split('.')[0],
  feelsLike: current.main?.feels_like.toString().split('.')[0],
  main: current?.weather?.length && current.weather[0].main,
});

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const forecastMapper = current => {
  const forecastDay = new Date(current.dt * 1000);
  const displayDate = `${forecastDay.getUTCDate()} ${months[forecastDay.getMonth()]}`;
  const iconUrl =
    current?.weather?.length &&
    `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;

  return {
    url: `weather/${current.id}`,
    icon: iconUrl,
    temp: current.main?.temp?.toString().split('.')[0],
    feelsLike: current.main?.feels_like.toString().split('.')[0],
    main: current?.weather?.length && current.weather[0].main,
    humidity: current.main?.humidity,
    date: displayDate,
  };
};
