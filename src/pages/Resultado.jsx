import { useState } from "react";
import { obtenerEstadisticas } from "../assets/components/QuestionsAnswers/Estadisticas";
import STrivia from "../assets/components/Share/STrivia"; // Importar el componente de compartir

function Resultado() {
   const params = new URLSearchParams(location.search);
    const [category] = useState(params.get("category") || "");
    const [difficulty] = useState(params.get("difficulty") || "");
  const [mostrarOpciones, setMostrarOpciones] = useState(false); // Estado para controlar la visibilidad de las opciones de compartir

  const estadisticas = obtenerEstadisticas();

  if (!estadisticas) {
    return <p>No hay estadísticas disponibles. Juega una partida primero.</p>;
  }

  const { nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal } = estadisticas;

  return (
    <div className="ResultadoPageContainer">
    
    <h1 className="tituloResultado">Resultado</h1>
    <section className="ResultadosInfo">
      <div className="infoResultados">
        <div className="infoResultadoNombre">
          <span className="">Nombre:</span> {nombre}
        </div>
        <h3 className="subtituloResultado">Estadísticas</h3>
        <p><strong>Total de Preguntas:</strong> {totalPreguntas}</p>
        <p><strong>Aciertos:</strong> {aciertos}</p>
        <p><strong>Porcentaje de Aciertos:</strong> {porcentajeAciertos}%</p>
        <p><strong>Puntaje Total:</strong> {puntajeTotal} puntos</p>
      </div>
      
    </section>

      <div className="resultadoBotones">
        <button >Menú</button>
        <button >Intentar de nuevo</button>
        <STrivia
            totalPreguntas={totalPreguntas}
            porcentajeAciertos={porcentajeAciertos}
          />
      </div>
    </div>
  );
}

export default Resultado;