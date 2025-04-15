import { useState } from "react";
import CAnswers from "./CAnswers";

function BQuestionsAnswers({ title, pregunta, respuestas, respuestaCorrecta}) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const handleSeleccion = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  return (
  <>
    <h5 className="card-title">{title}</h5><br></br>
    <div className="card text-center mb-3" style={{ width: "18rem" }}>
       
      <div className="card-body">
        
        <p className="card-text">{pregunta}</p>

        
      </div>
    </div>
    <div className="d-grid gap-2">
          {respuestas.map((respuesta, index) => {
            let color = "primary"; 

            if (respuestaSeleccionada) {
              if (respuesta === respuestaCorrecta) {
                color = "success";
              } else if (respuesta === respuestaSeleccionada) {
                color = "danger";
              } else {
                color = "secondary";
              }
            }

            return (
              <CAnswers
                key={index}
                text={respuesta}
                color={color}
                onClick={() => handleSeleccion(respuesta)}
              />
            );
          })}
        </div>
    </>
  );
}

export default BQuestionsAnswers;
