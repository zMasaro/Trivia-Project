import { FacebookShareButton, TwitterShareButton } from "react-share";

const shareUrl = "https://tu-aplicacion.com";
const shareMessage = `¡He respondido ${totalPreguntas} preguntas con un ${porcentajeAciertos}% de aciertos en Pa' Saber!`;

<div className="share-buttons">
    <FacebookShareButton url={shareUrl} quote={shareMessage}>
        Compartir en Facebook
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl} title={shareMessage}>
        Compartir en Twitter
    </TwitterShareButton>
</div>