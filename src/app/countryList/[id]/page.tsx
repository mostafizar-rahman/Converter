"use client";
import React from "react";
import { useParams } from "next/navigation";

import ConverteForm from "@/components/ConvertForm/ConvertForm";
import LatestPrice from "@/components/LatestPrice/LatestPrice";
import RateChart from "@/components/RateChart/RateChart";

const historyDetails = () => {
  const router = useParams();


  return (
    <section className="bg-slate-100">
      <div className="py-5 max-w-7xl mx-auto px-4">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <ConverteForm query={router} />
          <div className="mt-12 lg:mt-0 bg-white rounded-md p-3">
            <div className="lg:w-[700px] md:w-[500px] sm:w-[500px] w-[300px]   h-[400px] ">
              <RateChart />
            </div>
          </div>
        </div>
        <LatestPrice />
      </div>
    </section>
  );
};


export default historyDetails;
