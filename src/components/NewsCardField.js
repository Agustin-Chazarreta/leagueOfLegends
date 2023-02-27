import NewsCard from "./NewsCard";
import React from "react";
import styled from "styled-components";
export default function NewsCardField() {
  return (
    <DivNewsCardField>
      <NewsCard
        imagen="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd51626dc512592fd/61a8316e46713833c753a1ef/TFT_Patch_11_24_Notes_Banner_v2.jpg"
        titulo="NOTAS DE LA VERSIÓN 11.24 DE TEAMFIGHT TACTICS"
        subtitulo="TFT"
      ></NewsCard>
      <NewsCard
        imagen="https://media.vandal.net/m/1-2021/2021121964291_1.jpg"
        titulo="NEW SKINS PRE-SEASON"
        subtitulo="NEW SKINS"
      ></NewsCard>
      <NewsCard
        imagen="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arcane-league-of-legends-1636541499.jpg?crop=1.00xw:0.893xh;0,0.0261xh&resize=640:*"
        titulo="NEW LEAGUE SERIE RELEASE"
        subtitulo="ARCANE"
      ></NewsCard>
      <NewsCard
        imagen="https://img.blogs.es/anexom/wp-content/uploads/2021/08/LEAGUE-OF-LEGENDS-WILD-RIFT.jpg"
        titulo="NOTAS DE LA VERSIÓN 11.23 DE LEAGUE OF LEGENDS"
        subtitulo="VERSIÓN 11.23"
      ></NewsCard>
      <NewsCard
        imagen="https://images6.alphacoders.com/651/651136.jpg"
        titulo="NOTAS DE LA VERSIÓN 11.22 DE LEAGUE OF LEGENDS"
        subtitulo="VERSIÓN 11.22"
      ></NewsCard>
      <NewsCard
        imagen="https://whatifgaming.com/wp-content/uploads/2022/05/Dark-Star-scaled.jpg"
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
`;
