import React, { FC, useState } from "react";

type CounterProps = {
  startValue: number;
};

export const Counter: FC<CounterProps> = ({ startValue = 0 }) => {
  const [counter, setCounter] = useState(startValue);

  const handlePlus = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleMinus = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    </div>
  );
};
