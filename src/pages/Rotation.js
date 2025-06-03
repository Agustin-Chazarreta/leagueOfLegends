import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { API_KEY_LOL } from "../utils/keys";

export default function Rotation({ champions }) {
  const [dataRotationKey, setDataRotationKey] = useState([]);

  useEffect(() => {
    fetch(
      `https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY_LOL}`
    )
      .then((res) => res.json())
      .then((data) => setDataRotationKey(data.freeChampionIds))
      .catch((error) =>
        console.error("Hubo un problema al obtener la rotación:", error)
      );
  }, []);

  const rotationChampions = Object.values(champions).filter((champion) =>
    dataRotationKey.includes(Number(champion.key))
  );

  return (
    <RotationCardField>
      {rotationChampions.map((champion) => (
        <Card key={champion.id} champion={champion} />
      ))}
    </RotationCardField>
  );
}

const RotationCardField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
