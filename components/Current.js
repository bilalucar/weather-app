import Link from 'next/link';
import React from 'react';
import { currentMapper } from '../utils/weatherLogic';

const Current = ({ current, removeClick, showRemoveIcon }) => {
  const data = currentMapper(current);

  return (
    <>
      <Link href={data.url}>
        <div className="current-wrapper">
          <div className="current">
            <div>
              <div className="current__location">
                {data.name}, {data.country}
              </div>
              <div className="current__detail">
                <div className="current__degree">{data.temp}°</div>
                <div className="current__extra">
                  <span>{data.main}</span>
                  <span>Feels Like: {data.feelsLike}°</span>
                </div>
              </div>
            </div>
            <div>
              <img alt={data.main} src={data.icon} />
            </div>
          </div>
          {showRemoveIcon ? (
            <div className="close-button" onClick={e => removeClick(e, data.id)}>
              <div>X</div>
            </div>
          ) : (
            ''
          )}
        </div>
      </Link>
    </>
  );
};

export default Current;
