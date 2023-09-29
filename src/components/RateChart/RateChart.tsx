"use client";
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import useDate from "@/hooks/useDate";
import { FORM_CONTEXT } from "@/context/CurrencyCodeProvider/CurrencyCodeProvider";
import { getlocalStrogeCurrencyCode } from "@/utlits/localStroge";

const RateChart = () => {
  const { state } = useContext(FORM_CONTEXT);
  const { fromCurrencyCode, toCurrencyCode } = state;
  const [endDate, startDate] = useDate();

  const [timeSeriseData, setTimeSeriseData] = useState({} as any);
  const [localCurrencyCode, setLocalCurrencyCode] = useState<any>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ----------- Get localStroge country code
    setLocalCurrencyCode(getlocalStrogeCurrencyCode());
    setLoading(true);

    if (
      fromCurrencyCode &&
      (localCurrencyCode || toCurrencyCode) &&
      startDate &&
      endDate
    ) {
      fetch(
        `https://openexchangerates.org/api/time-series.json?app_id=${process.env.NEXT_PUBLIC_API_KEY}&start=${startDate}&end=${endDate}&symbols=${
          localCurrencyCode || toCurrencyCode
        }&base=${fromCurrencyCode}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTimeSeriseData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [fromCurrencyCode, localCurrencyCode, toCurrencyCode, startDate, endDate]);

  // ----------- Loaging spinner
  if (loading)
    return (
      <div className="w-16 h-16 border-4 border-dashed border-[#20e04a] rounded-full animate-spin"></div>
    );

  //   ----------- Time serise object convert in array
  const labels = [];
  const data = [];
  let label = "";
  for (const key in timeSeriseData.rates) {
    labels.push(key);
    const rateObj = timeSeriseData.rates[key];
    data.push(rateObj[localCurrencyCode || toCurrencyCode]);
    label = localCurrencyCode || toCurrencyCode;
  }

  //   ---------- Recevied time serices array for showing chart
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
    },
    scales: {
      y: {
        // beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default RateChart;
