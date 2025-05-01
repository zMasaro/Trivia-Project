import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CAnswer from "../assets/components/QuestionsAnswers/CAnswers";
import { Link } from "react-router-dom";
function Resultado() {
  /* Obtener estadísticas desde localStorage mediante la logica que ira en
   preguntas, para almanecenar la estadisticas*/
  const estadisticas = JSON.parse(localStorage.getItem("estadisticas"));
  //Const para la estadisiticas
  const { nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal } = estadisticas;

  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1 className="titulo mb-4 display-4">Resultado</h1>

      <div className="card p-4 mb-4 shadow">
        <div className="mb-3">
          <span className="fw-bold">Nombre:</span> {nombre}
        </div>
        <h5 className="mb-3">Estadísticas</h5>
        <p><strong>Total de Preguntas respondidas:</strong> {totalPreguntas}</p>
        <p><strong>Aciertos:</strong> {aciertos}</p>
        <p><strong>Porcentaje de Aciertos:</strong> {porcentajeAciertos}%</p>
        <p><strong>Puntaje Total:</strong> {puntajeTotal} puntos</p>
      </div>


      <div className="d-flex justify-content-center gap-3" style={{ width: "auto" }}>
        <Link to="/" className="btn" id="boton">
          Empezar
        </Link>
        <Link to="/preguntas" className="btn" id="boton">
          Intentar de nuevo
        </Link>
        <Link to="/" className="btn" id="boton">
          Compartir
        </Link>
      </div>
    </section>
  );
}

export default Resultado;