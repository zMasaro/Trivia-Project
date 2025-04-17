import React, { useState, useEffect } from "react";
import BProgressBar from "../components/ProgressBar/BProgressBar";

function QuestionTimer() {
  const [timeLeft, setTimeLeft] = useState(15); 
  const [percentage, setPercentage] = useState(100); 

  useEffect(() => {
    const totalDuration = 15; 
    const intervalo = 1000; 

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1); 
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
        height="80px"            
        width="100%"            
      />
    </div>
  );
}

export default QuestionTimer;