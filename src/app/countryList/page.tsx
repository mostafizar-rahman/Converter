import React from "react";
import Link from "next/link";
import useCountries from "@/hooks/useCountries";
import Search from "@/components/Common/Search/Search";

const CountryList = async () => {
  const countriesList = await useCountries();

  return (
    <section className="py-5 relative bg-slate-100">
      <Search />

      {/* ------------- Country List as a table */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-7xl mx-auto px-4 gap-5 mt-7`}
      >
        {countriesList?.map(
          (e: { code: string; description: string }, index: number) => {
            return (
              <div key={index} className="">
                <Link
                  className="block  h-14 py-2 text-center text-sm md:text-base hover:scale-105 transition-all bg-white rounded-md"
                  href={`/countryList/${e.code}`}
                >
                  {e.description}
                </Link>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default CountryList;

export async function generateMetadata() {
  return {
    title: "Currency Converter - Country List",
    description: "Currency Converter with nextJs, tailwind css, and typescript",
  };
}
