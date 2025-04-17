import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import useAPITrivia from '../assets/components/APITrivia/useAPITrivia';

function preguntas() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [nombre, setNombre] = useState(params.get('nombre') || '');
    const [category, setCategory] = useState(params.get('category') || '');
    const [difficulty, setDifficulty] = useState(params.get('difficulty') || '');
   
    const { data, loading, error, triggerReload } = useAPITrivia(category, difficulty);

    return (
        <>
            <h1>Página de Nosotros</h1>
            <p>nombre {nombre}</p>

            {/* Botón para recargar preguntas */}
            <button onClick={() => {
                triggerReload();
            }} disabled={loading}>
                {loading ? "Cargando..." : "Refrescar preguntas"}
            </button>


            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}

            {!loading && !error && Array.isArray(data) && data.length > 0 && (
                <ul>
                    {data.map((item, index) => (
                        <li key={item.id || index}>
                            <p dangerouslySetInnerHTML={{ __html: item.question }} />
                            <p>Respuesta correcta: {item.correct_answer}</p>
                            <ul>
                                {Array.isArray(item.incorrect_answers) && item.incorrect_answers.map((ans, i) => (
                                    <li key={i}>{ans}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
export default preguntas;