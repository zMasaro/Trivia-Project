import { useState, useEffect } from "react";

const useAPITrivia = (category, difficulty) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Iniciar en true
  const [error, setError] = useState(null);
  const [reloadCounter, setReloadCounter] = useState(0);

  const triggerReload = () => {
    setReloadCounter(prev => prev + 1); // Incrementa el contador para recargar
  };

  useEffect(() => {

    const fetchQuestions = async () => { // Mejor usar async/await
      try {
        setLoading(true);
        setError(null);

        let url = `https://opentdb.com/api.php?amount=10`;
        if (category ==="") url += `&category=${category}`;
        if (difficulty ==="") url += `&difficulty=${difficulty}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const json = await response.json();
        setData(json.results || []);
        
      } catch (err) {
        setError(err.message || "Error al cargar las preguntas");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty, reloadCounter]);

  return { data, loading, error, triggerReload }; // Retorna un objeto
};

export default useAPITrivia;