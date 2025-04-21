import { useState, useMemo, useEffect, useRef } from "react";
import CAnswers from "./CAnswers";

function mezclarRespuestas(respuestas, correcta) {
  const combinadas = [...respuestas, correcta];
  return combinadas
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function BQuestionsAnswers({ title, pregunta, respuestas, respuestaCorrecta, onRespuestaSeleccionada, time }) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const timerRef = useRef(null);
  const respondidoRef = useRef(false);

  const respuestasMezcladas = useMemo(
    () => mezclarRespuestas(respuestas, respuestaCorrecta),
    [respuestas, respuestaCorrecta]
  );

  useEffect(() => {
    // Reset todo al cambiar de pregunta
    setRespuestaSeleccionada(null);
    respondidoRef.current = false;


    timerRef.current = setTimeout(() => {
      if (!respondidoRef.current) {
        setRespuestaSeleccionada(respuestaCorrecta);
        respondidoRef.current = true;

        setTimeout(() => {
          if (typeof onRespuestaSeleccionada === "function") {
            onRespuestaSeleccionada();
          }
        }, 2000);
      }
    }, (time * 1000));

    return () => clearTimeout(timerRef.current);
  }, [pregunta]);

  const handleSeleccion = (respuesta) => {
    if (respondidoRef.current) return;

    clearTimeout(timerRef.current);
    setRespuestaSeleccionada(respuesta);
    respondidoRef.current = true;

    setTimeout(() => {
      if (typeof onRespuestaSeleccionada === "function") {
        onRespuestaSeleccionada();
      }
    }, 2000); o
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <h5 className="card-title text-center">{title}</h5>

      <div className="card text-center mb-3" style={{ width: "22rem" }}>
        <div className="card-body">
          <p className="card-text">{pregunta}</p>
        </div>
      </div>

      <div className="d-grid gap-2 w-100" style={{ maxWidth: "22rem" }}>
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
    </div>
  );
}

export default BQuestionsAnswers;
