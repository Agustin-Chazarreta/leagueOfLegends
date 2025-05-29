import React from "react";
import HeroVideoSection from "../components/HeroVideoSection";
import InfoSection from "../components/InfoSection";
import FinalSection from "../components/FinalSection";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <HeroVideoSection />
      <InfoSection />
      <FinalSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
