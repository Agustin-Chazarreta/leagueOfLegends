import React from "react";
import GameVideoSection from "../components/GameVideoSection";
import InfoSection from "../components/InfoSection";
import FinalSection from "../components/FinalSection";
import HeroTypeSection from "../components/HeroTypeSection";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <GameVideoSection />
      <InfoSection />
      <FinalSection />
      <HeroTypeSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
