import { useState } from "react";
import { obtenerEstadisticas } from "../assets/components/QuestionsAnswers/Estadisticas";
import STrivia from "../assets/components/Share/STrivia"; // Importar el componente de compartir

function Resultado() {
   

  const estadisticas = obtenerEstadisticas();

  if (!estadisticas) {
    return <p>No hay estadísticas disponibles. Juega una partida primero.</p>;
  }

  const { nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal, dificultad, categoria } = estadisticas;

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
        <button title="Volver a pagina principal" ><a href={`/`}><img src="src/assets/imagenes/casa.png"></img></a></button>
        <button title="Volver a intentar"><a href= {`/preguntas?nombre=${nombre}&category=${categoria}&difficulty=${dificultad}`} ><img src="src/assets/imagenes/reiniciar.png"></img></a></button>
        <STrivia
            nombre= {nombre}
            totalPreguntas={totalPreguntas}
            porcentajeAciertos={porcentajeAciertos}
            puntos={puntajeTotal}
            categoria={categoria}
            dificultad={dificultad}
          />
      </div>
    </div>
  );
}

export default Resultado;