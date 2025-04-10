import React, { useState } from "react";
import styled from "styled-components";

export default function Navegation({ champions, setChampionsFilter }) {
  const [search, setSearch] = useState("");

  const filterByRole = (role) => {
    setChampionsFilter(
      Object.values(champions).filter((champion) =>
        champion.tags.includes(role)
      )
    );
  };

  const filterBySearch = (value) => {
    setSearch(value);
    const filtered = Object.values(champions).filter((champion) =>
      champion.name.toLowerCase().includes(value.toLowerCase())
    );
    setChampionsFilter(filtered);
  };

  const heroeAleatorio = () => {
    const keys = Object.keys(champions);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomChampion = champions[randomKey];
    setChampionsFilter([randomChampion]);
  };

  return (
    <NavWrapper>
      <InputSearch
        placeholder="Buscar campeón..."
        value={search}
        onChange={(e) => filterBySearch(e.target.value)}
      />

      <ButtonsWrapper>
        <Button onClick={() => setChampionsFilter(champions)}>Todos</Button>
        <Button onClick={() => filterByRole("Assassin")}>Asesinos</Button>
        <Button onClick={() => filterByRole("Fighter")}>Luchadores</Button>
        <Button onClick={() => filterByRole("Mage")}>Magos</Button>
        <Button onClick={() => filterByRole("Marksman")}>Tiradores</Button>
        <Button onClick={() => filterByRole("Support")}>Soportes</Button>
        <Button onClick={() => filterByRole("Tank")}>Tanques</Button>
        <Button onClick={heroeAleatorio}>Aleatorio</Button>
      </ButtonsWrapper>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 30px auto;
  width: 100%;
  max-width: 1400px;
`;

const InputSearch = styled.input`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #ffcc00;
  background-color: #1c1c1c;
  color: white;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #ffaa00;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background-color: #111;
  color: #ffcc00;
  border: 2px solid #ffcc00;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #222;
    color: white;
    border-color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffaa00;
  }
`;
