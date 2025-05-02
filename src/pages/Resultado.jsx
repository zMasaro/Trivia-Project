import { useState } from "react";
import { obtenerEstadisticas } from "../assets/components/QuestionsAnswers/Estadisticas";
import STrivia from "../assets/components/Share/STrivia"; // Importar el componente de compartir

function Resultado() {
  const estadisticas = obtenerEstadisticas();

  if (!estadisticas) {
    return <p>No hay estadísticas disponibles. Juega una partida primero.</p>;
  }

  const {
    nombre,
    totalPreguntas,
    aciertos,
    porcentajeAciertos,
    puntajeTotal,
    dificultad,
    categoria,
  } = estadisticas;

  return (
    <>
      <div className="ResultadoPageContainer">
        <h1 className="tituloResultado">Resultados</h1>
        <section className="ResultadosInfo">
          <div className="infoResultados">
            <h3 className="subtituloResultado">Estadísticas</h3>
            <table>
              <tr>
                <th></th>
                <th>
                  <p className="nombreResultados">Nombre: {nombre}</p>
                </th>
              </tr>
              <tr>
                <td>
                  <img
                    className="questionIcon"
                    src="/src/assets/imagenes/questionMark.png"
                    alt=""
                  />
                </td>
                <td>
                  <p className="questionText">Total de Preguntas:</p>
                </td>
                <td> {totalPreguntas}</td>
              </tr>
              <tr>
                <td>
                  <img
                    className="checkedIcon"
                    src="/src/assets/imagenes/checked.png"
                    alt=""
                  />
                </td>
                <td>
                  <p className="checkedText">Correctas: </p>
                </td>
                <td>{aciertos}</td>
              </tr>
              <tr>
                <td>
                  <img src="/src/assets/imagenes/analytics.png" alt="" />
                </td>
                <td>
                  <p>Porcentaje correcto: </p>
                </td>
                <td>{porcentajeAciertos}%</td>
              </tr>
              <tr>
                <td>
                  <img src="/src/assets/imagenes/trophy.png" alt="" />
                </td>
                <td>
                  <p>Puntaje Total:</p>
                </td>
                <td>{puntajeTotal}</td>
              </tr>
            </table>
          </div>
        </section>
      </div>

      <div className="menusbotones">
      <button className="menuBoton" title="Volver a pagina principal">
          <a href={`/`}>
            <img src="src/assets/imagenes/casa.png"></img>
          </a>
        </button>
        <button className="resetBoton" title="Volver a intentar">
          <a
            href={`/preguntas?nombre=${nombre}&category=${categoria}&difficulty=${dificultad}`}
          >
            <img src="src/assets/imagenes/reiniciar.png"></img>
          </a>
        </button>
      </div>
      <div className="resultadoBotones">
        

        <STrivia
          nombre={nombre}
          totalPreguntas={totalPreguntas}
          porcentajeAciertos={porcentajeAciertos}
          puntos={puntajeTotal}
          categoria={categoria}
          dificultad={dificultad}
        />
      </div>
    </>
  );
}

export default Resultado;
