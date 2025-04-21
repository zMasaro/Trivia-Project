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

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <h2>{timeLeft > 0 ? `${timeLeft}s` : "Tiempo agotado!"}</h2>

      <BProgressBar
        percentage={percentage} 
        color="success"          
        height="20px"            
        width="100%"            
      />
    </div>
  );
}

export default QuestionTimer;