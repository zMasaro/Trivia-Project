import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useAPITranslation from "../assets/components/APIHooks/useAPITranslation";
import BQuestionsAnswers from "../assets/components/QuestionsAnswers/BQuestionsAnswers";
import 'bootstrap/dist/css/bootstrap.min.css';
import useTime from "../assets/components/QuestionsAnswers/useTime";
import QuestionTimer from "../assets/components/Progressbar/QuestionTimer";
import CSpinnerEspacial from "../assets/components/Spinner/CSpinnerEspacial";
import { agregarEstadistica } from "../assets/components/QuestionsAnswers/Estadisticas";



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

  // Nuevos estados para estadísticas y puntaje
  const [totalPreguntas, setTotalPreguntas] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [porcentajeAciertos, setPorcentajeAciertos] = useState(0);
  const [puntajeTotal, setPuntajeTotal] = useState(0);

  // Actualizar porcentaje cada vez que cambien los aciertos o el total
  useEffect(() => {
    if (totalPreguntas > 0) {
      setPorcentajeAciertos(((aciertos / totalPreguntas) * 100).toFixed(2));
    }
  }, [aciertos, totalPreguntas]);

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

  const manejarSiguientePregunta = (acerto, segundosTardados) => {
    if (bloqueado) return;
    setBloqueado(true);
  
    setTimeout(() => {
      setIndiceActual((prev) => prev + 1);
      setBloqueado(false);
  
      // Actualizar estadísticas
      setTotalPreguntas((prev) => prev + 1);
  
      if (acerto) {
        setAciertos((prev) => prev + 1);
  
        // Solo sumar puntos si acertó
        const puntosGanados = Math.max(0, 1500 - (segundosTardados * 50));
        setPuntajeTotal((prev) => prev + puntosGanados);
      }
    }, 2000);
  };

  if (loading && preguntas.length === 0) return <CSpinnerEspacial text={"Obteniendo preguntas"} />;
  if (error) return <CSpinnerEspacial text={`Error: ${error}`} />;

  const preguntaActual = preguntas[indiceActual];

  /*nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal*/
  const handleStadisticas = () => {
    agregarEstadistica(nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal);
  }

  return (
    <div className="contenedorPagePreguntas">
      <button id="boton" onClick={() => handleStadisticas()}><a href="/resultados">Teminar</a></button>
    <section className="contenedorPreguntas">

      {preguntaActual && (
        <>
        <div className="BQuestionAnswer">
          <BQuestionsAnswers
            title={`Pregunta ${indiceActual + 1}`}
            pregunta={preguntaActual.question}
            respuestas={preguntaActual.incorrect_answers}
            respuestaCorrecta={preguntaActual.correct_answer}
            onRespuestaSeleccionada={manejarSiguientePregunta}
            time={time}
          />
        </div>
          <div className="questionTimer">
          <QuestionTimer key={indiceActual} time={time}/>
          </div>
        </>
      )}
    </section>
    </div>
  );
}

export default Preguntas;
