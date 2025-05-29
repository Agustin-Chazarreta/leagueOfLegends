import React from "react";
import styled from "styled-components";

export default function InfoSection() {
  return (
    <Section>
      <Overlay>
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

            <StyledLink href="#">
              <ButtonContent>juega ahora</ButtonContent>
            </StyledLink>
          </TextAndButtonContainer>
        </OverlayContainer>
      </Overlay>

      <ImageContainer>
        <img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a6f94cd5ed222d3b99e535f17cd9592d3c716bb5-3840x1616.png?auto=format&fit=fill&q=80&h=816"
          alt=""
          loading="lazy"
        />
      </ImageContainer>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 20px;
  }
`;

const OverlayContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  width: clamp(200px, 50vw, 600px);
  height: auto;
  display: block;
`;

const TextAndButtonContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
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
  line-height: 1.2;
  margin-bottom: 10px;
`;

const P2 = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 0;
  text-transform: uppercase;
  font-size: clamp(40px, 6vw, 80px);
  line-height: 1.1;
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
  background-color: #c8aa6e;
  color: black;
  padding: 16px 28px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
  font-size: clamp(12px, 1vw, 16px);
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
