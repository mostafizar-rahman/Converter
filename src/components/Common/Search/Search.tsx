"use client";

import React, { useState } from "react";
import Link from "next/link";
import useCountriesClient from "@/hooks/useCountriesClient";



type searchType = {
  code: string;
  description: string;
}[];
const Search =  () => {
  const countriesList =  useCountriesClient();

  const [searchingCountryList, setSearchingCountryList] = useState<searchType>(
    []
  );

  // -------------- Searching country by character
  const handleSearchCountryByCharacter = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      return setSearchingCountryList([]);
    }
    const filteredCountry = countriesList.filter((country) =>
      country.description.toLowerCase().includes(value)
    );
    setSearchingCountryList(filteredCountry);
  };
  return (
    <>
      {/* -------------- Search bar */}
      <div className="relative w-[300px] my-3 mx-auto ">
        <input
          type="search"
          placeholder="Search Country"
          className="px-4 py-2 rounded-full min-w-[300px] relative outline-none"
          onChange={handleSearchCountryByCharacter}
        />
      </div>

      {/* --------------- Search Result Display  Modal ---------- */}
      <div
        className={`absolute top-[4%] left-1/2 -translate-x-1/2  max-w-7xl w-full min-h-[100px] max-h-[600px] overflow-y-auto bg-white rounded-lg py-5 px-5 shadow-xl ${
          searchingCountryList.length ? "visible" : "hidden"
        }`}
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {searchingCountryList?.map(
            (e: { code: string; description: string }, index: number) => {
              return (
                <div key={index} className="">
                  <Link
                    className="block  h-14 py-2 text-center text-sm md:text-base hover:bg-slate-100 transition-all rounded-md"
                    href={`/countryList/${e.code}`}
                  >
                    {e.description}
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
