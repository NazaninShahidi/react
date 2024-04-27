import { useEffect, useState } from "react";
import "./slider.css";

interface CustomSliderProps {
  children?: React.ReactNode;
  title?: string;
}

const CustomSlider = ({ children }: CustomSliderProps) => {
  const [value, setValue] = useState<number>(50);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  // Function to handle changes in the slider value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1));
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setValue((prevValue) => (prevValue === 0 ? 100 : prevValue - 1));
  };

  // Function to start the timer for automatic slide change
  const startTimer = () => {
    const newTimer = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    setTimer(newTimer);
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  // Effect to start the timer when the component mounts
  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="silder">
      <div className="header-wrapper">
        <h4>featured recipes</h4>
        <div className="navigation-buttons">
          <button className="prev-btn" onClick={prevSlide}>
            {`<`}
          </button>
          <button className="next-btn" onClick={nextSlide}>
            {`>`}
          </button>
        </div>
      </div>
      <div className="slider-container">{children}</div>
    </div>
  );
};

export default CustomSlider;
