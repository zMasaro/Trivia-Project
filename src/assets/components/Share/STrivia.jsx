import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

const STrivia = ({ nombre, totalPreguntas, porcentajeAciertos, puntos, categoria, dificultad }) => {
  let shareUrl = `https://jvg2858m-5173.use2.devtunnels.ms/preguntas?name=Retador`;
  if (categoria && categoria.trim() !== "") shareUrl += `&category=${categoria}`;
  if (dificultad && dificultad.trim() !== "") shareUrl += `&difficulty=${dificultad}`;

  //const shareUrl = `triviaapp-b9a34.firebaseapp.com/preguntas?name=Retador&category=${ca}&difficulty=${}`;
  const shareMessage = `¡${nombre} a respondido ${totalPreguntas} preguntas con un ${porcentajeAciertos}% de aciertos y un puntaje de:${puntos}. En Pa' Saber! Te invito a superarlo!`;

  return (
    <div className="share-buttons">
      <FacebookShareButton className="facebook" url={shareUrl} quote={shareMessage}>
        <img src="src/assets/imagenes/facebook.png"></img>
      </FacebookShareButton>
      <TwitterShareButton className="equis" url={shareUrl} title={shareMessage}>
        <img src="src/assets/imagenes/equisX.png"></img>
      </TwitterShareButton>
      <WhatsappShareButton className="wasap" url={shareUrl} title={shareMessage}>
        <img src="src/assets/imagenes/whatsapp.png"></img>
      </WhatsappShareButton>
    </div>
  );
};

export default STrivia;