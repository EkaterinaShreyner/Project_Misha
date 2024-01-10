import React from "react";
import { useState, useEffect } from "react";
import { Progress } from "react-bulma-components";

function ProgressBar(chance) {
  const [valueProgress, setValueProgress] = useState(0);
  const colorProgress = 
    valueProgress > 10 && valueProgress < 80
    ? "is-warning"
    : valueProgress < 10
    ? "is-danger"
    : "is-success";

  useEffect(() => {
    const interval = setInterval(() => {
      setValueProgress((prevValue) => {
        if (prevValue < chance) {
          return prevValue + 1;
        }
        clearInterval(interval);
        return prevValue;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [chance]);

  return (
    <div>
      <span>
        {valueProgress}%
      </span>
      <Progress
        className={`progress ${colorProgress}`}
        max={100}
        value={valueProgress}/>
    </div> 
  );
}

export default ProgressBar;