import { useEffect, useState } from "react";

const second = 1_000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export const Calculate_Day = (birthday: Date, interval = second) => {
  const daysleft = birthday.getTime() - Date.now(); // 60 days = 8.000.000 ms f.eks
  const [time, setTime] = useState(daysleft); // time  = 8.000.000 ms f.eks

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime((prevTime) => prevTime - interval);
    }, interval);

    return () => {
      clearInterval(intervalID);
    };
  }, [interval, birthday]);

  return {
    days: Math.floor(time / day),
    hours: Math.floor((time / hour) % 24),
    minutes: Math.floor((time / minute) % 60),
    seconds: Math.floor((time / second) % 60),
  };
};
