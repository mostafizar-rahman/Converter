"use client"
import React, { useEffect, useState } from "react";

const useCountriesClient = () => {
  const [countries, setCountries] = useState<any>({});

  useEffect(() => {
    fetch("https://openexchangerates.org/api/currencies.json")
      .then((res) => res.json())
      .then((country) => setCountries(country));
  }, []);

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

export default useCountriesClient;
