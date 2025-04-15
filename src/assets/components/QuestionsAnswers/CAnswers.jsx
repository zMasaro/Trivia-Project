function CAnswers({ text, color, onClick }) {
    return (
      <a href="#" className={`btn btn-${color} w-100`} onClick={onClick}>
        {text}
      </a>
    );
  }
  
  export default CAnswers;