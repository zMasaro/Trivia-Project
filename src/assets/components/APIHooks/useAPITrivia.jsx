import { useState, useEffect } from "react";

const useAPITrivia = (category, difficulty) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadCounter, setReloadCounter] = useState(0);

  const triggerReload = () => {
    setReloadCounter((prev) => prev + 1);
  };

  useEffect(() => {
    let retryTimeout;

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = `https://opentdb.com/api.php?amount=25`;
        if (category && category.trim() !== "") url += `&category=${category}`;
        if (difficulty && difficulty.trim() !== "") url += `&difficulty=${difficulty}`;

        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const json = await response.json();
        json;
        setData(json.results || []);
      } catch (err) {
        setError(err.message || "Error al cargar las preguntas");
        retryTimeout = setTimeout(() => {
          setReloadCounter((prev) => prev + 1);
        }, 5000);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();

    return () => clearTimeout(retryTimeout);
  }, [category, difficulty, reloadCounter]);

  return { data, loading, error, triggerReload };
};

export default useAPITrivia;
