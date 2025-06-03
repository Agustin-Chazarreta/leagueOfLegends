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
    <>
      <HeaderSection>
        <h1>
          ELIGE TU <span>CAMPEÓN</span>
        </h1>
        <p>
          Con más de 140 campeones, encontrarás al que se adapte perfectamente a
          tu estilo de juego. <br />
          Domina uno o domínalos a todos.
        </p>
      </HeaderSection>

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
    </>
  );
}

const DivCardField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const HeaderSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #006680;

    span {
      color: #ffd700;
      margin-left: 8px;
    }

    @media (min-width: 640px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  p {
    margin-top: 20px;
    font-size: 1rem;
    color: #ddd;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;

    @media (min-width: 640px) {
      font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
`;
