import React from 'react';
import { forecastMapper } from '../utils/weatherLogic';

const Forecast = ({ forecast }) => {
  const data = forecastMapper(forecast);

  return (
    <div className="forecast-list__item">
      <span>{data.date}</span>
      <img alt={data.main} src={data.icon} />
      <span className="forecast-list__item__degree">{data.temp}°</span>
      <span>{data.main}</span>
      <span>Humidity: {data.humidity}%</span>
    </div>
  );
};

export default Forecast;
