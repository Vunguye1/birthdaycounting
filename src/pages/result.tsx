import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

import { Calculate_Day } from "../components/timer";

function ResultPage(props: any) {
  const { days, hours, minutes, seconds } = Calculate_Day(props.day);

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  /* confetti animation handling*/
  const showConfetti = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", showConfetti);

    return () => {
      window.removeEventListener("resize", showConfetti);
    };
  }, [dimension]);

  return (
    <div className="container">
      <ReactConfetti
        width={dimension.width}
        height={dimension.height}
        wind={0.025}
      />

      <h1>Countdown to your birthday</h1>

      <ul className="show">
        <li>
          {days} <span>days</span>
        </li>
        <li>
          {" "}
          {hours} <span>hours</span>
        </li>
        <li>
          {" "}
          {minutes} <span>minutes</span>
        </li>
        <li>
          {" "}
          {seconds} <span>seconds</span>
        </li>
      </ul>
    </div>
  );
}

export default ResultPage;
