import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { API_KEY_LOL } from "../utils/keys";

import styled from "styled-components";
export default function Rotation({ champions }) {
  const [dataRotationKey, setDataRotationKey] = useState([]);

  useEffect(() => {
    fetch(
      `https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY_LOL}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataRotationKey(data.freeChampionIds);
      })
      .catch(function (error) {
        console.log("hubo un problemita rey" + error);
      });
  }, []);
  const arrayDeChampions = Object.values(champions);
  console.log(champions);
  const array = [];
  dataRotationKey.forEach((key) => {
    arrayDeChampions.forEach((champion) => {
      if (key === parseInt(champion.key)) {
        array.push(champion);
      }
    });
  });

  return (
    <RotationCardField>
      {array.map((c) => {
        return <Card champion={c}></Card>;
      })}
    </RotationCardField>
  );
}
const RotationCardField = styled.div`
  display: flex;
  align-items: center;
  width: 1400px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
