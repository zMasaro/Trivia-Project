function CAnswers({ text, color, onClick }) {
  return (
    <a
      href="#"
      className={`botonPreguntas ${
        color === "success"
          ? "botonCorrectoPreguntas"
          : color === "danger"
          ? "botonIncorrectoPreguntas"
          : "botonNormalPreguntas"
      }`}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default CAnswers;
