import { useState } from "react";

export const useClickCounter = startValue => {
  if (!startValue > 0) startValue = 0;
  const [counter, setCounter] = useState(startValue);

  const raiseCounter = () => {
    setCounter(counter + 1);
  };

  return [counter, raiseCounter];
};
