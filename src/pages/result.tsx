import React from "react";
import { Calculate_Day } from "../components/timer";

function ResultPage(props: any) {
  const { days, hours, minutes, seconds } = Calculate_Day(props.day);
  return (
    <div className="show">
      <div> {days} days</div>
      <div> {hours} hours</div>
      <div> {minutes} minutes</div>
      <div> {seconds} seconds</div>
    </div>
  );
}

export default ResultPage;
