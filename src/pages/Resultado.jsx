import { useState } from "react";
import { obtenerEstadisticas } from "../assets/components/QuestionsAnswers/Estadisticas";
import STrivia from "../assets/components/Share/STrivia"; // Importar el componente de compartir

function Resultado() {
  const [mostrarOpciones, setMostrarOpciones] = useState(false); // Estado para controlar la visibilidad de las opciones de compartir

  const estadisticas = obtenerEstadisticas();

  if (!estadisticas) {
    return <p>No hay estadísticas disponibles. Juega una partida primero.</p>;
  }

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

      <div className="d-flex flex-wrap gap-3 justify-content-center">
      <button id="boton" ><a href="/">Menu</a></button>
       <button id="boton"><a href="/preguntas">Intentar de nuevo</a></button>
        <button id="boton" onClick={() => setMostrarOpciones(!mostrarOpciones)}>
          Compartir
        </button>
      </div>

      {/* Mostrar las opciones de compartir si el estado está activado */}
      {mostrarOpciones && (
        <div className="mt-4">
          <STrivia
            totalPreguntas={totalPreguntas}
            porcentajeAciertos={porcentajeAciertos}
          />
        </div>
      )}
    </section>
  );
}

export default Resultado;