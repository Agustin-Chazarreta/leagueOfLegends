import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
export default function Rotation({ champions }) {
  const [dataRotationKey, setDataRotationKey] = useState([]);

  useEffect(() => {
    fetch(
      `https://la1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-3b3d6aac-1611-4e0b-8041-608e868c789c`
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
    <div className="cardField">
      {array.map((c) => {
        return <Card champion={c}></Card>;
      })}
    </div>
  );
}
