import { obtenerEstadisticas } from "../assets/components/QuestionsAnswers/Estadisticas";

function Resultado() {

  const estadisticas = obtenerEstadisticas();

  if (!estadisticas) {
    return <p>No hay estadísticas disponibles. Juega una partida primero.</p>;
  }

  const { nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal } = estadisticas;

  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1 className="titulo mb-4 display-4">Resultado</h1>

      <div className="card p-4 mb-4 shadow" >
        <div className="mb-3">
          <span className="fw-bold">Nombre:</span> {nombre}
        </div>
        <h3 className="mb-3">Estadísticas</h3>
        <p><strong>Total de Preguntas:</strong> {totalPreguntas}</p>
        <p><strong>Aciertos:</strong> {aciertos}</p>
        <p><strong>Porcentaje de Aciertos:</strong> {porcentajeAciertos}%</p>
        <p><strong>Puntaje Total:</strong> {puntajeTotal} puntos</p>
      </div>

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <button id='boton'>Menu</button>
        <button id='boton'>Intentar de nuevo</button>
        <button id='boton'>Compartir</button>
      </div>
    </section>
  );
}

export default Resultado;