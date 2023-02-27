import React from "react";
import "../App.css";
import styled from "styled-components";
import Card from "../components/Card";
import Navegation from "../components/Navegation";
export default function AllChampions({
  setChampionsFilter,
  champions,
  championsFilter,
}) {
  return (
    <div>
      <Header>
        <div>
          <h2>ELIGE TU </h2>
        </div>
        <div>
          <h1> CAMPEÓN </h1>
        </div>
        <div>
          <h3>
            Con más de 140 campeones, encontrarás el que se ajuste perfectamente
            a tu estilo de juego. Domina a uno o domínalos a todos.
          </h3>
        </div>
      </Header>
      <Navegation
        champions={champions}
        championsFilter={championsFilter}
        setChampionsFilter={setChampionsFilter}
      ></Navegation>
      <DivCardField>
        {Object.values(championsFilter).map((champion) => {
          return <Card champion={champion}></Card>;
        })}
      </DivCardField>
    </div>
  );
}

const Header = styled.div`
  height: 300px;
  width: 1903px;
  font-style: italic;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  background-size: cover;
  text-align: center;
  h2 {
    font-size: 20px;
  }
  h3 {
    width: 460px;
    margin: 12px auto 0px;
    font-size: 0.875rem;
    text-align: center;
    letter-spacing: 0.08em;
    line-height: 1.6;
  }
`;

const DivCardField = styled.div`
  display: flex;
  align-items: center;
  width: 1400px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
