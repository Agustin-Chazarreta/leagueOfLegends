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
        <HeaderSection>
          <h1>
            CHOOSE YOUR <span>CHAMPION</span>
          </h1>
          <p>
            With over 140 champions, you'll find the one that fits your
            playstyle perfectly. <br />
            Master one or master them all.
          </p>
        </HeaderSection>
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

const HeaderSection = styled.section`
  text-align: center;
  padding: 40px 20px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #006680;

    span {
      color: #ffd700;
      display: inline-block;
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
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;

    @media (min-width: 640px) {
      font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
`;
