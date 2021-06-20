export const getCitiesFromLocalStorage = () => JSON.parse(window.localStorage.getItem('cities'));

export const setCitiesFromLocalStorage = cities =>
  window.localStorage.setItem('cities', JSON.stringify(cities));

export const removeCityByIdFromLocalStorage = cityId =>
  setCitiesFromLocalStorage(getCitiesFromLocalStorage().filter(item => item !== cityId));
