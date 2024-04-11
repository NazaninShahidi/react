import React, { useEffect, useState } from "react";

interface IDate {
  hours: string;
  minutes: string;
  seconds: string;
  session: string;
}

function App() {
  const [time, setTime] = useState<IDate>({
    hours: "",
    minutes: "",
    seconds: "",
    session: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      const timeParts = currentTime.split(/[:\s]/);
      const hours = timeParts[0]; // Access the hours
      const minutes = timeParts[1]; // Access the minutes
      const seconds = timeParts[2]; // Access the seconds
      const session = timeParts[3];
      setTime({
        hours,
        minutes,
        seconds,
        session,
      });
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="clock-container">
      <div id="displayClock" className="clock">
        {`${time.hours}:${time.minutes}:${time.seconds}`}
      </div>
    </main>
  );
}

export default App;
