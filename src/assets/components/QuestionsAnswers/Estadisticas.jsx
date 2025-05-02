export function agregarEstadistica(nombre, totalPreguntas, aciertos, porcentajeAciertos, puntajeTotal, dificultad, categoria) {
    const estadisticas = {
        nombre,
        totalPreguntas,
        aciertos,
        porcentajeAciertos,
        puntajeTotal,
        dificultad,
        categoria
    };
    localStorage.setItem("estadisticas", JSON.stringify(estadisticas));
}

export function obtenerEstadisticas() {
    const estadisticas = localStorage.getItem("estadisticas");
    return estadisticas ? JSON.parse(estadisticas) : null;
}

//export default { agregarEstadistica, obtenerEstadisticas };