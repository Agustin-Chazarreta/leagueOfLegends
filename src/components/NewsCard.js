import React from "react";
import styled from "styled-components";
export default function NewsCard({ imagen, titulo, subtitulo }) {
  return (
    <Card>
      <ImageWrapper>
        <Image alt={titulo} src={imagen} />
      </ImageWrapper>
      <Date>
        <P>Actualizaciones del juego</P> 27/5/2025
      </Date>
      <InfoContainer>
        <h3>{titulo}</h3>
        <H4>{subtitulo}</H4>
      </InfoContainer>
    </Card>
  );
}
const H4 = styled.h4`
  margin: 10px 0 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;

const P = styled.p`
  color: rgb(225, 131, 48);
  font-weight: 600;
  margin-right: 5px;
`;

const Date = styled.div`
  margin: 10px 0 10px;
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  width: 30%;
  overflow: hidden;
  border-bottom: 1px solid black;
  border-right: 2px solid black;
  margin: 40px 0 40px;
  cursor: pointer;

  h2,
  h4 {
    text-align: justify;
  }

  @media (max-width: 722px) {
    width: 100%;
  }
`;
