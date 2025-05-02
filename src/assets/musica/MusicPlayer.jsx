import React, { useRef, useEffect } from 'react';

function MusicPlayer({ src, autoPlay = true, loop = true, volume = 0.5 }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (autoPlay) {
        audio.play().catch((error) => {
          console.error('Error al reproducir el audio:', error);
        });
      }
    }
  }, [autoPlay, volume]);

  return (
    <audio ref={audioRef} loop={loop}>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
}

export default MusicPlayer;