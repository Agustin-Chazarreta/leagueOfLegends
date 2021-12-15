import React from "react";
import "../App.css";
import styled from "styled-components";
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
    <NavCardField>
      <NavCardFieldSelect value="Buscar">Buscar</NavCardFieldSelect>
      <div>
        <NavCardFieldButton onClick={() => setChampionsFilter(champions)}>
          Todos
        </NavCardFieldButton>
        <NavCardFieldButton title="Assassin" onClick={(e) => filterFunction(e)}>
          Asesinos
        </NavCardFieldButton>
        <NavCardFieldButton title="Fighter" onClick={(e) => filterFunction(e)}>
          Luchadores
        </NavCardFieldButton>
        <NavCardFieldButton title="Mage" onClick={(e) => filterFunction(e)}>
          Magos
        </NavCardFieldButton>
        <NavCardFieldButton title="Marksman" onClick={(e) => filterFunction(e)}>
          Tiradores
        </NavCardFieldButton>
        <NavCardFieldButton title="Support" onClick={(e) => filterFunction(e)}>
          Soportes
        </NavCardFieldButton>
        <NavCardFieldButton title="Tank" onClick={(e) => filterFunction(e)}>
          Tanques
        </NavCardFieldButton>
        <NavCardFieldButton onClick={() => heroeAleatorio()}>
          Campeon Aleatorio
        </NavCardFieldButton>
      </div>
      <NavCardFieldSelect value="Buscar">Buscar</NavCardFieldSelect>
    </NavCardField>
  );
}
const NavCardField = styled.nav`
  height: 40px;
  width: 1400px;
  border-style: inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`;
const NavCardFieldButton = styled.button`
  border: none;
  cursor: pointer;
  margin: 0px 7.5px 0px 7.5px;
  box-shadow: 3px;
  background-color: white;
  transition: box-shadow 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 0px 1px rgb(140, 137, 143);
    background-color: rgb(185, 202, 202);
  }
  &:focus {
    box-shadow: 0px 0px 0px 1px rgb(140, 137, 143);
    background-color: rgb(185, 202, 202);
  }
`;
const NavCardFieldSelect = styled.select`
  width: 100px;
  height: 100%;
`;
