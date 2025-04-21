import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useAPITranslation from "../assets/components/APIHooks/useAPITranslation";
import BQuestionsAnswers from "../assets/components/QuestionsAnswers/BQuestionsAnswers";
import 'bootstrap/dist/css/bootstrap.min.css';
import useTime from "../assets/components/QuestionsAnswers/useTime";
import QuestionTimer from "../assets/components/Progressbar/QuestionTimer";
import CSpinnerEspacial from "../assets/components/Spinner/CSpinnerEspacial";


function Preguntas() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [nombre] = useState(params.get("nombre") || "");
  const [category] = useState(params.get("category") || "");
  const [difficulty] = useState(params.get("difficulty") || "");

  const { translatedData, loading, error, triggerReload } = useAPITranslation(category, difficulty);

  const [preguntas, setPreguntas] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);
  const cargandoMasRef = useRef(false);
  const time = useTime(difficulty);

  // Añadir preguntas cuando translatedData cambia
  useEffect(() => {
    if (translatedData.length > 0) {
      setPreguntas((prev) => [...prev, ...translatedData]);
    }
  }, [translatedData]);

  // Cargar más preguntas si quedan 3 o menos
  useEffect(() => {
    if (preguntas.length - indiceActual <= 3 && !cargandoMasRef.current) {
      cargandoMasRef.current = true;
      triggerReload();
    }
  }, [indiceActual, preguntas.length, triggerReload]);

  const manejarSiguientePregunta = () => {
    if (bloqueado) return;
    setBloqueado(true);

    setTimeout(() => {
      setIndiceActual((prev) => prev + 1);
      setBloqueado(false);
    }, 2000);
  };

  if (loading && preguntas.length === 0) return <CSpinnerEspacial text={"Obteniendo preguntas"} />;
  if (error) return <CSpinnerEspacial text={`Error: ${error}`} />;

  const preguntaActual = preguntas[indiceActual];

  return (
    <section className="preguntas container mt-5">
      <h1 className="mb-4">Página de Preguntas</h1>
      <div className="mb-3">
        <span className="fw-bold">Nombre:</span> {nombre}
      </div>
      <button
        className="btn btn-warning mb-4"
        onClick={() => {
          setPreguntas([]);
          setIndiceActual(0);
          cargandoMasRef.current = false;
          triggerReload();
        }}
      >
        Recargar Preguntas
      </button>

      {preguntaActual && (
        <div className="d-flex justify-content-center">
          <BQuestionsAnswers
            title={`Pregunta ${indiceActual + 1}`}
            pregunta={preguntaActual.question}
            respuestas={preguntaActual.incorrect_answers}
            respuestaCorrecta={preguntaActual.correct_answer}
            onRespuestaSeleccionada={manejarSiguientePregunta}
            time={time}
          />
          <br></br>
          <QuestionTimer key={indiceActual} time={time}></QuestionTimer>
        </div>
      )}
    </section>
  );
}

export default Preguntas;
