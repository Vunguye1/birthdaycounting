import React, { useState } from "react";
import "./App.css";
import { Calculate_Day } from "./components/timer";
import { listofmonth } from "./data/months";
import { keyboardKey } from "@testing-library/user-event";

interface Monthobj {
  numb: number;
  word: string | undefined;
}

function TimerComponent({ day }: { day: Date }) {
  const { days, hours, minutes, seconds } = Calculate_Day(day);
  return (
    <div className="show">
      <div> {days} days</div>
      <div> {hours} hours</div>
      <div> {minutes} minutes</div>
      <div> {seconds} seconds</div>
    </div>
  );
}

function App() {
  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
  });

  const [confirm, setConfirm] = useState(false); // set confirm when user click or "enter"

  const months: Monthobj[] = listofmonth;

  const Clickhandling = () => {
    setConfirm(true);
  };

  const Presshandling = (e: keyboardKey) => {
    if (e.key === "Enter") {
      setConfirm(true);
    }
  };

  if (confirm) {
    const myDay = parseInt(birthday.day);
    const myMonth = months.find(
      (value) => value.word === birthday.month.toLowerCase()
    );

    if (myMonth && myDay) {
      const day: Date = new Date(new Date().getFullYear(), myMonth.numb, myDay);

      if (
        new Date().getDate() === day.getDate() &&
        new Date().getMonth() === day.getMonth()
      ) {
        return <div className="birthday">Happy birthday brillebjorn</div>;
      } else if (new Date() > day) {
        day.setFullYear(day.getFullYear() + 1);
      }
      return <TimerComponent day={day} />;
    } else {
      return <div>Invalid day or month input</div>;
    }
  }

  return (
    <div className="mycontainer">
      <input
        autoFocus
        placeholder="Day"
        value={birthday.day}
        onChange={(e) => {
          setBirthday({
            ...birthday,
            day: e.target.value,
          });
        }}
      ></input>
      <input
        placeholder="Month"
        value={birthday.month}
        onKeyDown={Presshandling}
        onChange={(e) => {
          setBirthday({
            ...birthday,
            month: e.target.value,
          });
        }}
      ></input>
      <button onClick={Clickhandling}>Confirm</button>
    </div>
  );
}

export default App;
