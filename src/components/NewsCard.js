import React from "react";
import styled from "styled-components";
export default function NewsCard({ imagen, titulo, subtitulo }) {
  return (
    <NewsEachCard>
      <img alt={titulo} src={imagen} />
      <h2>{titulo}</h2>
      <h4>{subtitulo}</h4>
    </NewsEachCard>
  );
}

const NewsEachCard = styled.div`
  width: 30%;
  height: auto;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  border-bottom: 1px solid black;
  border-right: 2px solid black;
  text-shadow: 3px;
  margin: 10px 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 1s ease;
    :hover {
      transform: scale(1.1);
    }
  }

  :h2 {
    text-align: justify;
  }
  :h4 {
    text-align: justify;
  }
  @media (max-width: 722px) {
    & {
      width: 100%;
    }
  }
`;
