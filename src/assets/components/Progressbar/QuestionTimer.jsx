import React, { useState, useEffect } from "react";
import BProgressBar from "./BProgressBar";

function QuestionTimer({time}) {
  const [timeLeft, setTimeLeft] = useState(time); 
  const [percentage, setPercentage] = useState(100); 

  useEffect(() => {
    const totalDuration = time; 
    const intervalo = 1000; 

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1); 
        console.log("Time left:", timeLeft);
        setPercentage(prev => (timeLeft / totalDuration) * 100); 
      }
    }, intervalo);

    return () => clearInterval(timer); 
  }, [timeLeft]); 

  const getBarColor = () => {
    if (percentage > 55) return "success";   // verde
    if (percentage > 25) return "warning";   // amarillo
    return "danger";                         // rojo
  };

  return (
    <div className="quetionTimerContainer">
      <h2 className="questionTimerNumber">{timeLeft > 0 ? `${timeLeft}s` : "Tiempo agotado!"}</h2>
    <div className="questionTimerProgressBar">
      <BProgressBar
        percentage={percentage} 
        color={getBarColor()}          
        height="20px"            
        width="100%"            
      />
      </div>
    </div>
  );
}

export default QuestionTimer;