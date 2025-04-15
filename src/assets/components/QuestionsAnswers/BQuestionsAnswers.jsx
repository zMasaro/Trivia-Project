import { useState, useMemo } from "react";
import CAnswers from "./CAnswers";


function mezclarRespuestas(respuestas, correcta) {
  const combinadas = [...respuestas, correcta];
  return combinadas
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function BQuestionsAnswers({ title, pregunta, respuestas, respuestaCorrecta }) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  
  const respuestasMezcladas = useMemo(
    () => mezclarRespuestas(respuestas, respuestaCorrecta),
    [respuestas, respuestaCorrecta]
  );

  const handleSeleccion = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <br />
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">{pregunta}</p>
        </div>
      </div>
      <div className="d-grid gap-2">
        {respuestasMezcladas.map((respuesta, index) => {
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
