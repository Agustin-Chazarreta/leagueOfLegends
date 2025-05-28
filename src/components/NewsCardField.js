import NewsCard from "./NewsCard";
import React from "react";
import styled from "styled-components";
export default function NewsCardField() {
  return (
    <DivNewsCardField>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/92c7480b87a90f9f2c6e625d4ac7680e3b508d73-1920x1080.jpg?auto=format&fit=crop&q=80&h=188&w=335&crop=center"
        titulo="NOTAS DE LA VERSIÓN 11.24 DE TEAMFIGHT TACTICS"
        subtitulo="La versión 14.5 trae consigo cambios para renovar y mejorar objetos importantes y añadir cuatro artefactos nuevos. Además, incluye ajustes de equilibrio para Ciudad Cibernética y Renacer: Remix rúnico."
      ></NewsCard>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/9d36f1e322fe135fa49179751dfab12060da3985-1920x1080.jpg?auto=format&fit=crop&q=80&h=188&w=335&crop=center"
        titulo="NEW SKINS PRE-SEASON"
        subtitulo="NEW SKINS"
      ></NewsCard>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c844cde8e456801ae22c5de960073d5d48345e06-1920x1080.jpg?auto=format&fit=crop&q=80&h=188&w=335&crop=center"
        titulo="NEW LEAGUE SERIE RELEASE"
        subtitulo="ARCANE"
      ></NewsCard>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8d51e95a7ccafd0e1afbe0d13df5736b0b54595e-1920x1080.jpg?auto=format&fit=crop&q=80&h=188&w=335&crop=center"
        titulo="NOTAS DE LA VERSIÓN 11.23 DE LEAGUE OF LEGENDS"
        subtitulo="VERSIÓN 11.23"
      ></NewsCard>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/7616895863b5df37d8444f1fb4513d07385dea83-1920x1080.jpg?auto=format&fit=crop&q=80&h=270&w=480&crop=center"
        titulo="NOTAS DE LA VERSIÓN 11.22 DE LEAGUE OF LEGENDS"
        subtitulo="VERSIÓN 11.22"
      ></NewsCard>
      <NewsCard
        imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/3d2ee15078c7edcd51d0d686b27b8b2938b0f031-1920x1080.jpg?auto=format&fit=crop&q=80&h=188&w=335&crop=center"
        titulo="NOTAS DE LA VERSIÓN 11.21 DE LEAGUE OF LEGENDS"
        subtitulo="VERSIÓN 11.21"
      ></NewsCard>
    </DivNewsCardField>
  );
}
const DivNewsCardField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;
