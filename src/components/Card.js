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
    <div className="card" onClick={() => setStateModal(!stateModal)}>
      <Modal stateModal={stateModal} setStateModal={setStateModal}>
        <Contenido>
          <span>{champion.id}</span>
          <span>{champion.title}</span>
          <div className="modalIMG">
            <img
              alt="chamionsImg"
              id="modalIMGid"
              className="modalIMG"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg?w=510`}
            />
          </div>
          <div className="modalStats">
            <section className="modalStatsMicro">
              <p className="hovertext" data-hover="Initial-Life">
                <BsSuitHeartFill /> {champion.stats.hp}
              </p>

              <p className="hovertext" data-hover="Initial-Mana">
                <BsFillDropletFill /> {champion.stats.mp}
              </p>

              <p className="hovertext" data-hover="Initial-Armor">
                <GiAbdominalArmor /> {champion.stats.armor}
              </p>

              <p className="hovertext" data-hover="Initial-Magic Resist">
                <GiMagicShield /> {champion.stats.spellblock}
              </p>

              <p className="hovertext" data-hover="Initial-Attack Damage">
                <GiBroadsword /> {champion.stats.attackdamage}
              </p>

              <p className="hovertext" data-hover="Attack-Range">
                <GiOrange /> {champion.stats.attackrange}
              </p>
            </section>
            <section className="modalStatsMacro">
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
            </section>
          </div>
          <div className="modalCardText">
            <p>{champion.blurb}</p>
          </div>
        </Contenido>
      </Modal>
      <img
        alt="chamionImg"
        className="championIMG"
        src={`https://static.u.gg/assets/lol/riot_static/11.23.1/img/champion/${champion.image.full}`}
      />
      <span className="championName">{champion.id}</span>
    </div>
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
    margin-bottom: 20px;
  }
  img {
    width: 50%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
