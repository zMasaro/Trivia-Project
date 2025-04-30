function CAnswers({ text, color, onClick }) {
    return (
      <a href="#" className={`btn btn-${color} w-100 m-1 p-30px`} onClick={onClick}>
        {text}
      </a>
    );
  }
  
  export default CAnswers;