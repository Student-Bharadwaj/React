import { useState } from "react";

export default function Lottery() {
  let [ticket, setTicket] = useState();
  let [win, setWin] = useState();

  function sumOfDigit(num) {
    let sum = 0;
    num
      .toString()
      .split("")
      .forEach((digit) => {
        sum += parseInt(digit);
      });
    return sum;
  }
  let genTicket = () => {
    let randomNo;
    do {
      randomNo = Math.floor(Math.random() * 999);
    } while (randomNo < 100);

    setTicket(randomNo);
    let ticketSum = sumOfDigit(randomNo);
    // console.log(ticketSum);
    setWin((prevWin) => {
      if (ticketSum == 15) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <div>
      <p>
        {win ? (
          <h1>congratulations! you won Lottery.</h1>
        ) : (
          <h1>oops! Bad Luck.</h1>
        )}
      </p>

      <h3>Ticket number:{ticket}</h3>
      <button onClick={genTicket}>get new ticket</button>
    </div>
  );
}
