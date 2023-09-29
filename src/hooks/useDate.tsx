import { useEffect, useState } from "react";

const useDate = () => {
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    const fullDate = new Date();

    // -------- end date / 1 month previous date
    const year = fullDate.getFullYear();
    const eMonth =
      fullDate.getMonth().toString().length < 2
        ? `0${fullDate.getMonth() + 1}`
        : fullDate.getMonth() + 1;
    const date =
      fullDate.getDate().toString().length < 2
        ? `0${fullDate.getDate()}`
        : fullDate.getDate();

    const endDate = `${year}-${eMonth}-${date}`;
    setEndDate(endDate);


    // ---------- start date/today date
    const sMonth = fullDate.getMonth() + 1;
    const previousDate = `${year}-${
      (sMonth - 1).toString().length < 2 ? `0${sMonth - 1}` : sMonth - 1
    }-${date}`;
    setStartDate(previousDate)

  }, []);

  return [endDate, startDate];
};
export default useDate;
