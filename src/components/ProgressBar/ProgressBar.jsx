import React from "react";
import { useState } from "react";
import { Progress } from "react-bulma-components";

function ProgressBar(chance) {
  const [valueProgress, setValueProgress] = useState(chance);
  const colorProgress = 
    valueProgress > 10 && valueProgress < 80
    ? "is-warning"
    : valueProgress < 10
    ? "is-danger"
    : "is-success";

  return (
    <div>
      <span>
        {chance}%
      </span>
      <Progress
        className={`progress ${colorProgress}`}
        max={100}
        value={valueProgress}/>
    </div> 
  );
}

export default ProgressBar;