"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  FROM_CURRENCY_CODE,
  TO_CURRENCY_CODE,
} from "@/context/ActionTypes/ActionTypes";
import {
  getlocalStrogeCurrencyCode, setLocalStrogeCurrencyCode,
} from "@/utlits/localStroge";
import { FORM_CONTEXT } from "@/context/CurrencyCodeProvider/CurrencyCodeProvider";
import useCountriesClient from "@/hooks/useCountriesClient";

const ConverteForm = ({ query }: any) => {
  const countriesList = useCountriesClient();
  const { dispatch } = useContext(FORM_CONTEXT);

  const [localCurrencyCode, setLocalCurrencyCode] = useState<any>("");
  const [convertAmount, setConvertAmount] = useState();
  const [currentAmount, setCurrentAmount] = useState<number>(1);
  const [fromCurrencyCode, setFromCurrencyCode] = useState("");
  const [toCurrencyCode, setToCurrencyCode] = useState("");


  // ---------- function for select country currency code
  const handleFromCurrencyCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFromCurrencyCode(value);
    dispatch({ type: FROM_CURRENCY_CODE, payload: value });
  };

  // ---------- function for select country currency code
  const handleToCurrencyCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setToCurrencyCode(value);
    dispatch({ type: TO_CURRENCY_CODE, payload: value });
    setLocalStrogeCurrencyCode(value)
  };

  const handleCurrentAmout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentAmount(value);

  };

  useEffect(() => {
    setLocalCurrencyCode(getlocalStrogeCurrencyCode());

    setFromCurrencyCode(query.id);
    dispatch({ type: FROM_CURRENCY_CODE, payload: query.id });

    // --------- by default "to select field" set USD code
    if (!getlocalStrogeCurrencyCode()) {
      setToCurrencyCode("USD");
      setLocalStrogeCurrencyCode("USD")
    }
  }, [query]);

  const handleConvertFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://openexchangerates.org/api/convert/${currentAmount}/${fromCurrencyCode}/${
        toCurrencyCode || localCurrencyCode
      }?app_id=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setConvertAmount(data.response);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="py-8 px-3 bg-white max-w-sm w-full rounded-lg min-h-[300px] flex flex-col justify-center ">
      <h3 className="text-black text-2xl font-bold mb-4">Calclute</h3>

      <form onSubmit={handleConvertFormSubmit}>
        <div>
          <p className="text-black">From</p>
          <select
            value={fromCurrencyCode}
            onChange={(e) => handleFromCurrencyCode(e)}
            className="py-3 outline-none rounded-lg w-full border-gray-200 border px-2"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>

          <input
            type="number"
            defaultValue={currentAmount}
            className="py-3 outline-none rounded-lg w-full px-2 mt-3 border-gray-200 border"
            onChange={(e) => handleCurrentAmout(e)}
          />
        </div>
        <div>
          <p className="text-black mt-5">To</p>
          <select
            value={toCurrencyCode || localCurrencyCode}
            onChange={(e) => handleToCurrencyCode(e)}
            className="py-3 outline-none rounded-lg w-full border-gray-200 border px-2"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>
          <p className="py-5 outline-none rounded-lg w-full  mt-3 border-gray-200 border px-2">
            {convertAmount}
          </p>
        </div>
        <button className=" btn px-4 py-3 bg-[#20e04a] rounded-lg mt-7 w-full text-white text-lg font-semibold hover:bg-[#1cbf40] transition-all">
          Convert
        </button>
      </form>
    </div>
  );
};

export default ConverteForm;
