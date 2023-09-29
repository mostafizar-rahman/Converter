
const useCountries = async () => {
  const res = await fetch("https://openexchangerates.org/api/currencies.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const countries = await res.json();

  // ---------- Convert fetching country list object as an array
  const countriesList = [];
  for (const key in countries) {
    countriesList.push({
      description: countries[key],
      code: key,
    });
  }
  return countriesList;
};
export default useCountries;
