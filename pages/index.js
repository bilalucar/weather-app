import Current from '../components/Current';
import { getCurrent, getCurrentByCityId } from '../api/weather';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getCitiesFromLocalStorage, removeCityByIdFromLocalStorage } from '../utils/sotrage';

export default function Home() {
  const [searchInput, setSearchInput] = useState();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [error, setError] = useState();

  useEffect(async function () {
    const recentlyCities = getCitiesFromLocalStorage();
    recentlyCities && (await getCurrents(recentlyCities));
  }, []);

  const searchClick = async e => {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    const result = await getCurrent(searchInput);
    const response = await result.json();

    if (response && response.id) {
      setCity(response);
      setError(null);
    } else {
      setCity(null);
      setError(`No city named ${searchInput} was found.`);
    }
  };

  const getCurrents = async cityIds => {
    const cities = [];
    for (const item of cityIds) {
      const result = await getCurrentByCityId(item);
      cities.push(await result.json());
    }
    setCities(cities);
  };

  const removeClick = (e, id) => {
    e.preventDefault();
    removeCityByIdFromLocalStorage(id);

    setCities(cities.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <main>
        <form onSubmit={searchClick} className="search-form">
          <input
            name="searchInput"
            type="text"
            placeholder="Search City..."
            onChange={e => setSearchInput(e.target.value)}
          />

          <button className="primary-button" type="submit">
            Search
          </button>
        </form>

        <div className="current-list">
          {city && <Current key={city.id} current={city} showRemoveIcon={false} />}
          {error && <div className="current-list__error">{error}</div>}
        </div>

        {(cities.length && (
          <>
            <h1 className="title">Recently Searched Cities...</h1>
            <div className="current-list">
              {cities.map(item => (
                <Current
                  key={item.id}
                  current={item}
                  showRemoveIcon={true}
                  removeClick={removeClick}
                />
              ))}
            </div>
          </>
        )) ||
          ''}
      </main>
    </Layout>
  );
}
