import React from "react";
import styled from "styled-components";
import { useState } from "react";
export default function HeroTypeSection() {
  const [selected, setSelected] = useState({
    srcHeroIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e1511d4d93a84b836844c77b4ff96b1cf65f4f8d-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
    alt: "Asesinos-icono",
    srcHeroImage:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=532",
    label: "Asesinos",
    background:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656",
  });

  const iconsHeroType = [
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e1511d4d93a84b836844c77b4ff96b1cf65f4f8d-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Asesinos-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=532",
      label: "Asesinos",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656",
    },
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/651b0a4388dffbb709588546d7d73fd1a4e5b45d-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Luchadores-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=517",
      label: "Luchadores",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656",
    },
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9872a60add3d215d217eda67e08a07ef7191ab89-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Magos-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=517",
      label: "Magos",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656",
    },
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fce8a3c7b1267ce428530fa845dd3f970772d5cd-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Tiradores-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=517",
      label: "Tiradores",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f99edcc231769a78110cc9c5c0c483336fd2d2e1-656x657.svg?auto=format&fit=fill&q=80&w=656",
    },
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1824a47af762aeac9d88d3bae5a4eb2ece928f0d-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Soportes-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=517",
      label: "Soportes",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656",
    },
    {
      srcHeroIcon:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/019898f21e749a5f6f71b609714d87f3fe084df5-220x220.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
      alt: "Tanques-icono",
      srcHeroImage:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=517",
      label: "Tanques",
      background:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656",
    },
  ];

  return (
    <Section style={{ backgroundImage: `url(${selected.background})` }}>
      <OverlayContainer>
        <TextAndButtonContainer>
          <TextContainer>
            <P1>ELIJE TU</P1>
            <P2>CAMPEÓN</P2>
            <P3>
              Ya sea que prefieras lanzarte directo a la batalla, apoyar a tus
              compañeros de equipo, o algo intermedio, hay un lugar para ti en
              la Grieta.
            </P3>
          </TextContainer>
          <StyledLink>
            <ButtonWrapper>
              <ButtonContent>descubrir mas campeones</ButtonContent>
            </ButtonWrapper>
            <ButtonWrapper2>
              <ButtonContent>juega ahora</ButtonContent>
            </ButtonWrapper2>
          </StyledLink>
          <IconHeroTypeContainer>
            {iconsHeroType.map((heroIcon) => (
              <IconWrapper
                key={heroIcon.label}
                onClick={() => setSelected(heroIcon)}
                $isSelected={selected.label === heroIcon.label}
              >
                <HeroIconCircle $isSelected={selected.label === heroIcon.label}>
                  <HeroIconImage
                    src={heroIcon.srcHeroIcon}
                    alt={heroIcon.alt}
                  />
                </HeroIconCircle>
                <HeroLabel>{heroIcon.label}</HeroLabel>
              </IconWrapper>
            ))}
          </IconHeroTypeContainer>
        </TextAndButtonContainer>
        <HeroImageContainer>
          <StyledImage
            src={selected.srcHeroImage}
            alt={selected.alt}
            loading="lazy"
            draggable="false"
          />
        </HeroImageContainer>
      </OverlayContainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  color: black;
  background-size: cover;
  background-color: white;
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
  align-items: center;
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
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const P1 = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 900;
  line-height: 72px;
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
  text-align: center;
  color: black;
  margin-bottom: 40px;
`;

const StyledLink = styled.div`
  display: flex;
  gap: 30px;
`;

const ButtonWrapper = styled.a`
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
const ButtonWrapper2 = styled.a`
  display: flex;
  background-color: #59c1de;
  padding: 19px 32px;
  text-transform: uppercase;
  color: black;
  margin-top: 20px;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #7acde4;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const IconHeroTypeContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 10px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.$isSelected ? 1 : 0.5)};
  transform: translateY(0px);
  transition: all 0.3s ease;
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-5px);
    opacity: 1;
  }
`;

const HeroIconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: ${(props) =>
    props.$isSelected ? "2px solid #c8aa6e" : "2px solid transparent"};
  transition: border 0.3s ease;
  background-color: #000;
`;

const HeroIconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroLabel = styled.span`
  font-size: 13px;
  color: black;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 8px;
`;
