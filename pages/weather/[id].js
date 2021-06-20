import React, { useEffect } from 'react';
import { getForecast } from '../../api/weather';
import Layout from '../../components/Layout';
import Forecast from '../../components/Forecast';
import { getCitiesFromLocalStorage, setCitiesFromLocalStorage } from '../../utils/storage';

export default function Weather({ data }) {
  useEffect(async function () {
    const recentlyCities = getCitiesFromLocalStorage() || [];

    if (data.city?.id && recentlyCities.indexOf(data.city?.id) < 0) {
      setCitiesFromLocalStorage([data.city?.id, ...recentlyCities]);
    }
  }, []);

  return (
    <Layout>
      <main>
        <div className="title title-bold">Daily Forecast for {data?.city?.name}</div>
        <div className="forecast-list">
          {data.list
            .filter(item => item?.dt_txt?.includes('00:00:00'))
            .map(item => (
              <Forecast key={item.dt} forecast={item} />
            ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const result = await getForecast(params.id);
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
}
