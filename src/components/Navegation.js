import React from "react";
import "../App.css";
export default function Navegation({ champions, setChampionsFilter }) {
  const filterFunction = (e) => {
    setChampionsFilter(
      Object.values(champions).filter((champion) =>
        champion.tags.includes(e.target.title)
      )
    );
  };
  const heroeAleatorio = () => {
    let max = 156;
    let min = 0;
    const random = Math.floor(Math.random() * (max - min) + min);

    console.log(Object.values(champions)[random].blurb);
    setChampionsFilter(
      Object.values(champions).filter((champion) =>
        champion.id.includes(Object.values(champions)[random].id)
      )
    );
  };

  return (
    <nav className="navCardField">
      <select value="Buscar" className="navCardFieldSelector">
        Buscar
      </select>
      <div>
        <button
          className="navCardFieldButtons"
          onClick={() => setChampionsFilter(champions)}
        >
          Todos
        </button>
        <button
          className="navCardFieldButtons"
          title="Assassin"
          onClick={(e) => filterFunction(e)}
        >
          Asesinos
        </button>
        <button
          className="navCardFieldButtons"
          title="Fighter"
          onClick={(e) => filterFunction(e)}
        >
          Luchadores
        </button>
        <button
          className="navCardFieldButtons"
          title="Mage"
          onClick={(e) => filterFunction(e)}
        >
          Magos
        </button>
        <button
          className="navCardFieldButtons"
          title="Marksman"
          onClick={(e) => filterFunction(e)}
        >
          Tiradores
        </button>
        <button
          className="navCardFieldButtons"
          title="Support"
          onClick={(e) => filterFunction(e)}
        >
          Soportes
        </button>
        <button
          className="navCardFieldButtons"
          title="Tank"
          onClick={(e) => filterFunction(e)}
        >
          Tanques
        </button>
        <button
          className="navCardFieldButtons"
          onClick={() => heroeAleatorio()}
        >
          Campeon Aleatorio
        </button>
      </div>
      <select value="Buscar" className="navCardFieldSelector">
        Buscar
      </select>
    </nav>
  );
}
