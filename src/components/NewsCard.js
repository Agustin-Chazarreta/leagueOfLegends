import React from "react";

export default function NewsCard({ imagen, titulo, subtitulo }) {
  return (
    <div className="newsCard">
      <img src={imagen} className="newsCardImg" />
      <h2 className="newsCardTitulo">{titulo}</h2>
      <h4 className="newsCardSubTitulo">{subtitulo}</h4>
    </div>
  );
}
