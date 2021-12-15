import React from "react";
import "../App.css";
import Modal from "./Modal";
import styled from "styled-components";
import { useState } from "react";
import { BsSuitHeartFill, BsFillDropletFill } from "react-icons/bs";
import {
  GiAbdominalArmor,
  GiBroadsword,
  GiOrange,
  GiMagicShield,
} from "react-icons/gi";

import { Rating } from "@mui/material";
export default function Card({ champion }) {
  const [stateModal, setStateModal] = useState(false);

  return (
    <CardModal onClick={() => setStateModal(!stateModal)}>
      <Modal stateModal={stateModal} setStateModal={setStateModal}>
        <Contenido>
          <span>{champion.id}</span>
          <span>{champion.title}</span>
          <div>
            <ModalIMG
              alt={champion.title}
              id={champion.id}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg?w=510`}
            />
          </div>
          <ModalStats>
            <ModalStatsInitials>
              <HoverText data-hover="Initial-Life">
                <BsSuitHeartFill /> {champion.stats.hp}
              </HoverText>

              <HoverText data-hover="Initial-Mana">
                <BsFillDropletFill /> {champion.stats.mp}
              </HoverText>

              <HoverText data-hover="Initial-Armor">
                <GiAbdominalArmor /> {champion.stats.armor}
              </HoverText>

              <HoverText data-hover="Initial-Magic Resist">
                <GiMagicShield /> {champion.stats.spellblock}
              </HoverText>

              <HoverText data-hover="Initial-Attack Damage">
                <GiBroadsword /> {champion.stats.attackdamage}
              </HoverText>

              <HoverText data-hover="Attack-Range">
                <GiOrange /> {champion.stats.attackrange}
              </HoverText>
            </ModalStatsInitials>
            <ModalStatsStarRate>
              <p>
                Attack:
                <Rating
                  name="customized-10"
                  defaultValue={Number(champion.info.attack)}
                  max={10}
                  readOnly
                />
              </p>

              <p>
                Defense:
                <Rating
                  name="customized-10"
                  defaultValue={Number(champion.info.defense)}
                  max={10}
                  readOnly
                />
              </p>

              <p>
                Magic:
                <Rating
                  name="customized-10"
                  defaultValue={Number(champion.info.magic)}
                  max={10}
                  readOnly
                />
              </p>

              <p>
                Difficulty:
                <Rating
                  name="customized-10"
                  defaultValue={Number(champion.info.difficulty)}
                  max={10}
                  readOnly
                />
              </p>
            </ModalStatsStarRate>
          </ModalStats>
          <div>
            <p>{champion.blurb}</p>
          </div>
        </Contenido>
      </Modal>
      <ChampionIMG
        src={`https://static.u.gg/assets/lol/riot_static/11.23.1/img/champion/${champion.image.full}`}
      />
      <ChampionName>{champion.id}</ChampionName>
    </CardModal>
  );
}

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: -10px;
  }
`;

const CardModal = styled.div`
  display: flex;
  width: calc(20% - 20px);
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin: 10px;
  /* transition: transform 1s ease; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 102, 128, 1);
  }
`;
const ChampionName = styled.span`
  background-color: rgb(0, 102, 128);
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
const ChampionIMG = styled.img`
  border-radius: 20px;
  width: 180px;
`;
const ModalStatsStarRate = styled.section`
  width: 50%;
  line-height: 100%;
  margin-top: 2px;
`;
const ModalStatsInitials = styled.section`
  line-height: 175%;
`;
const HoverText = styled.p`
  position: relative;
  border-bottom: 1px dotted black;
  :before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  :hover:before {
    opacity: 1;
    visibility: visible;
  }
`;
const ModalIMG = styled.img`
  width: 100%;
  border: 5px rgba(11, 198, 227, 0.63);
  border-style: inset;
`;
const ModalStats = styled.div`
  width: 100%;
  display: flex;
  letter-spacing: 0.1em;
  justify-content: space-between;
`;
