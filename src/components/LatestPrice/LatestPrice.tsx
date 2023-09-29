"use client";
import React from "react";
import { useEffect, useState } from "react";

import useCountriesClient from "@/hooks/useCountriesClient";

const LatestPrice = () => {
  const [rates, setRates] = useState({} as any);
  const countriesList = useCountriesClient();

  useEffect(() => {
    fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${process.env.NEXT_PUBLIC_API_KEY}&base=USD`
    )
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, []);

  //   ------------- Create a array with country name, country code and latest rate
  const latestRates: { countryName: string; countryCode: string; rate: any }[] =
    [];
  for (const key in rates) {
    countriesList.forEach((country) => {
      if (country.code === key) {
        const rate = {
          countryName: country.description,
          countryCode: country.code,
          rate: rates[key],
        };
        latestRates.push(rate);
      }
    });
  }

  return (
    <div className="mt-36 mx-auto max-w-7xl flex justify-center flex-col">
      <h3 className="text-2xl font-semibold mb-8 text-[#20e04ae4]">
        Latest currency rate base on USD
      </h3>
      <div>
        <div className="hidden sm:grid sm:grid-cols-[330px_150px_120px] md:grid-cols-[430px_150px_120px] lg:grid-cols-[400px_230px_150px] mb-5 gap-5 px-2">
          <h5 className="text-lg font-semibold">Country Name</h5>
          <h5 className="text-lg font-semibold">Currency Code</h5>
          <h5 className="text-lg font-semibold">Rate</h5>
        </div>

        {latestRates.map(({ countryName, countryCode, rate }, index) => {
          return (
            <ul
              key={index}
              className="sm:grid sm:grid-cols-[330px_150px_120px] md:grid-cols-[430px_150px_120px] lg:grid-cols-[400px_230px_150px] sm:mt-4 mt-12 gap-5  pt-3 pb-2 hover:bg-white transition-all px-2"
            >
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Country Name: </span>
                <span className="text-sm sm:text-base">{countryName}</span>
              </li>
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Currency Code: </span>
                <span className="text-sm sm:text-base">{countryCode}</span>
              </li>
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Rate: </span>
                <span className="text-sm sm:text-base">{rate}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default LatestPrice;
