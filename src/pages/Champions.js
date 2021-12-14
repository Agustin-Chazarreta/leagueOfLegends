import React from "react";
import "../App.css";

import Card from "../components/Card";
import Navegation from "../components/Navegation";
export default function AllChampions({
  setChampionsFilter,
  champions,
  setChampions,
  championsFilter,
}) {
  return (
    <div>
      <header className="header">
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
      </header>
      <Navegation
        champions={champions}
        championsFilter={championsFilter}
        setChampionsFilter={setChampionsFilter}
      ></Navegation>
      <div className="cardField">
        {Object.values(championsFilter).map((champion) => {
          return <Card champion={champion}></Card>;
        })}
      </div>
    </div>
  );
}
