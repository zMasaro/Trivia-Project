import { useState, useMemo, useEffect, useRef } from "react";
import CAnswers from "./CAnswers";

function mezclarRespuestas(respuestas, correcta) {
  const combinadas = [...respuestas, correcta];
  return combinadas
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function BQuestionsAnswers({
  title,
  pregunta,
  respuestas,
  respuestaCorrecta,
  onRespuestaSeleccionada,
  time,
}) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const timerRef = useRef(null);
  const respondidoRef = useRef(false);
  const tiempoInicioRef = useRef(null);

  const respuestasMezcladas = useMemo(
    () => mezclarRespuestas(respuestas, respuestaCorrecta),
    [respuestas, respuestaCorrecta]
  );

  useEffect(() => {
    // Reset al cambiar de pregunta
    setRespuestaSeleccionada(null);
    respondidoRef.current = false;
    tiempoInicioRef.current = Date.now(); // Guardamos el tiempo de inicio

    timerRef.current = setTimeout(() => {
      if (!respondidoRef.current) {
        setRespuestaSeleccionada(respuestaCorrecta);
        respondidoRef.current = true;

        const segundosTardados = Math.floor(
          (Date.now() - tiempoInicioRef.current) / 1000
        );
        if (typeof onRespuestaSeleccionada === "function") {
          onRespuestaSeleccionada(false, segundosTardados); // No acertó
        }
      }
    }, time * 1000);

    return () => clearTimeout(timerRef.current);
  }, [pregunta]);

  const handleSeleccion = (respuesta) => {
    if (respondidoRef.current) return;

    clearTimeout(timerRef.current);
    setRespuestaSeleccionada(respuesta);
    respondidoRef.current = true;

    const segundosTardados = Math.floor(
      (Date.now() - tiempoInicioRef.current) / 1000
    );
    const acerto = respuesta === respuestaCorrecta;

    setTimeout(() => {
      if (typeof onRespuestaSeleccionada === "function") {
        onRespuestaSeleccionada(acerto, segundosTardados);
      }
    }, 2000);
  };

  return (
    <div className="contenedorQuestions">
      

      <div className="tarjetaQuestions">
        <h5 className="tituloPreguntas">{title}</h5>
        <p className="textoQuestions">{pregunta}</p>
      </div>

      {/*Los botones siguen en bootstrap*/}
      <div className="opcionesQuestions">
        {respuestasMezcladas.map((respuesta, index) => {
          let color = "primary";

          if (respuestaSeleccionada) {
            if (respuesta === respuestaCorrecta) {
              color = "success";
            } else if (respuesta === respuestaSeleccionada) {
              color = "danger";
            } else {
              color = "primary";
            }
          }

          return (
            <div className="botonesAnswers">
            <CAnswers
              key={index}
              text={respuesta}
              color={color}
              onClick={() => handleSeleccion(respuesta)}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BQuestionsAnswers;
