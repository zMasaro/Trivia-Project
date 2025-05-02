import { useEffect, useState } from "react";
import useAPITrivia from "./hooks/useAPITrivia";

function App() {
  const { data, loading, error, triggerReload } = useAPITrivia("18", "hard");
  const [translatedData, setTranslatedData] = useState([]);

  useEffect(() => {
    console.log(data)
    if (data.length === 0) return;

    const translateQuestions = async () => {
      try {
        const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/json";

        const options = {
          method: "POST",
          headers: {
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
            "x-rapidapi-key": "1ac2ddf0e8msh1add0b06b4d63d3p10e338jsna8be0878c42d",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "en",
            to: "es",
            json: { 
              data 
            },
            common_protected_paths: ['type','difficulty']
          })
        };

        await fetch(url, options)
        .then((response) => response.json())
        .then((result => {
          console.log(result.trans.data)
          setTranslatedData(result.trans.data)
        }))

      } catch (err) {
        console.log("rror:", err);
      }
    };

    translateQuestions();
  }, [data]);

  if (loading) return <p>Loading trivia...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!translatedData) return <p>Translating questions...</p>;

  return (
    <div>
      <h1>Translated Quiz</h1>
      {translatedData.map((q, i) => (
        <div key={i}>
          <h3>{q.question}</h3>
          <ul>
            {[...q.incorrect_answers, q.correct_answer].sort().map((ans, idx) => (
              <li key={idx}>{ans}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;