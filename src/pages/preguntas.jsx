import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAPITranslation from "../assets/components/APIHooks/useAPITranslation";

function Preguntas() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [nombre] = useState(params.get("nombre") || "");
    const [category] = useState(params.get("category") || "");
    const [difficulty] = useState(params.get("difficulty") || "");

    const { translatedData, loading, error, triggerReload } = useAPITranslation(category, difficulty);

    if (loading) return <p>Cargando preguntas...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Página de Preguntas</h1>
            <p>Nombre: {nombre}</p>
            <button onClick={triggerReload}>Recargar Preguntas</button>
            <div>
                <h1>Translated Quiz</h1>
                {translatedData.map((q, i) => (
                    <div key={i}>
                        <h3>{q.question}</h3>
                        <ul>
                            {[...q.incorrect_answers, q.correct_answer]
                                .sort()
                                .map((ans, idx) => (
                                    <li key={idx}>{ans}</li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Preguntas;