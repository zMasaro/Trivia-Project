import { useEffect, useState } from "react";
import useAPITrivia from "./useAPITrivia";

function useAPITranslation(category, difficulty) {
    const { data, loading: triviaLoading, error: triviaError, triggerReload } = useAPITrivia(category, difficulty);
    const [translatedData, setTranslatedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (data.length === 0) return;

        const translateQuestions = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/json";

                const options = {
                    method: "POST",
                    headers: {
                        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
                        "x-rapidapi-key": "1ac2ddf0e8msh1add0b06b4d63d3p10e338jsna8be0878c42d",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "en",
                        to: "es",
                        json: { data },
                        common_protected_paths: ["type", "difficulty"],
                    }),
                };

                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                setTranslatedData(result.trans.data || []);
            } catch (err) {
                setError(err.message || "Error al traducir las preguntas");
            } finally {
                setLoading(false);
            }
        };

        translateQuestions();
    }, [data]);

    return { translatedData, loading: triviaLoading || loading, error: triviaError || error, triggerReload };
}

export default useAPITranslation;