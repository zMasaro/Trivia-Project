import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

const STrivia = ({ totalPreguntas, porcentajeAciertos }) => {
  const shareUrl = "https://tu-aplicacion.com";
  const shareMessage = `¡He respondido ${totalPreguntas} preguntas con un ${porcentajeAciertos}% de aciertos en Pa' Saber!`;

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} quote={shareMessage}>
        Compartir en Facebook
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={shareMessage}>
        Compartir en Twitter
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={shareMessage}>
        compartir con WhatsappShareButton
      </WhatsappShareButton>
    </div>
  );
};

export default STrivia;