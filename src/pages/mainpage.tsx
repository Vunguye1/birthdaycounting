import React, { useState } from "react";
import ResultPage from "./result";
import { keyboardKey } from "@testing-library/user-event";
import { listofmonth } from "../data/months";

interface Monthobj {
  numb: number;
  word: string | undefined;
}
function MainPage() {
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
      return <ResultPage day={day} />;
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

export default MainPage;
