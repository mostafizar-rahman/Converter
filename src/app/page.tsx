"use client"
import React from "react";
import ConverteForm from "@/components/ConvertForm/ConvertForm";

const Home = () => {

  return (
    <section className="banner" >
      <div className="max-w-7xl w-full mx-auto px-4 md:py-28 pt-10 pb-5  flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="lg:max-w-2xl max-w-md">
          <i className="font-bold md:text-5xl text-3xl text-white md:leading-[1.2] ">
            "Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver."
            <br />
            <span className="text-sm">-Ayn Rand</span>
          </i>
         
        </div>
        <div className="">
          <ConverteForm query={""} />
        </div>
       
      </div>
    </section>
  );
};

export default Home;
