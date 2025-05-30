import React from "react";
import styled from "styled-components";

export default function InfoSection() {
  return (
    <Section>
      <OverlayContainer>
        <HeroImageContainer>
          <StyledImage
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/76c98a7d43d4185e9ce1c9e0cd6f9647fed75acd-1304x1304.png?auto=format&fit=fill&q=80&w=720"
            alt=""
            loading="lazy"
            draggable="false"
          />
        </HeroImageContainer>
        <TextAndButtonContainer>
          <TextContainer>
            <P1>DOMINA CON</P1>
            <P2>ESTILO</P2>
            <P3>
              Cambia la apariencia de tus campeones favoritos con aspectos y
              personaliza tu estilo.
            </P3>
          </TextContainer>
          <StyledLink>
            <ButtonWrapper>
              <ButtonContent>juega ahora</ButtonContent>
            </ButtonWrapper>
          </StyledLink>
        </TextAndButtonContainer>
      </OverlayContainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  background-image: url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a6f94cd5ed222d3b99e535f17cd9592d3c716bb5-3840x1616.png?auto=format&fit=fill&q=80&h=816");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const OverlayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: clamp(200px, 50vw, 600px);
  height: auto;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const P1 = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  font-size: clamp(18px, 2vw, 24px);
  margin-bottom: 10px;
`;

const P2 = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  text-transform: uppercase;
  font-size: clamp(40px, 6vw, 80px);
  margin-bottom: 20px;
`;

const P3 = styled.div`
  font-family: Spiegel, sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.4;
  color: white;
  margin-bottom: 40px;
`;

const StyledLink = styled.a`
  display: flex;
  background-color: #c8aa6e;
  padding: 19px 32px;
  text-transform: uppercase;
  color: black;
  margin-top: 20px;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #b29655;
  }
`;

const ButtonWrapper = styled.span``;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
