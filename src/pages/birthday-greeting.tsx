import React from "react";
import bgCSS from "./birthday-greeting.module.css"; // practice using css module
import ReactConfetti from "react-confetti";
const BirthdayGreeting = () => {
  return (
    <div>
      <ReactConfetti />
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={bgCSS.grbody}>
          <div className={bgCSS.container}>
            <div className={bgCSS.birthdayCard}>
              <div className={bgCSS.cardcover}>
                <div className={bgCSS.cardcoverfront}>
                  <p>Happy birthday</p>
                </div>
                <div className={bgCSS.cardcoverback}></div>
              </div>
              <div className={bgCSS.cardcontent}>
                <p>
                  A wish for you on your birthday, whatever you ask may you
                  receive, whatever you seek may you find, whatever you wish may
                  it be fulfilled on your birthday and always.
                </p>
                <p> Happy birthday!</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default BirthdayGreeting;
