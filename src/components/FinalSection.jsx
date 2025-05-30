import React, { useState } from "react";
import styled from "styled-components";

const videoLinks = {
  Grieta:
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
  Aram: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
  TFT: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",
};

export default function FinalSection() {
  const [selected, setSelected] = useState("Grieta");
  const [videoLink, setVideoLink] = useState(videoLinks[selected]);

  const swapFrame = (videoKey) => {
    console.log(videoKey);
    setSelected(videoKey);
    setVideoLink(videoLinks[videoKey]);
  };

  const icons = [
    {
      key: "Grieta",
      label: "Grieta del invocador",
      img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e50f5eb867949248d81b3c4a1dcb3e7d7cf187de-440x440.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
    },
    {
      key: "Aram",
      label: "Aram",
      img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88a013a106668103aedbceb8f174bd4cbc06568b-440x440.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
    },
    {
      key: "TFT",
      label: "Team Fight Tactics",
      img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d1df552539dd70a8ffd38b6e93d1e751fb980ea6-440x440.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
    },
  ];

  return (
    <Section>
      <OverlayContainer>
        <ContentWrapper>
          <ContentColumn>
            <TextContainer>
              <Title>MÚLTIPLES MANERAS DE</Title>
              <Subtitle>JUGAR</Subtitle>

              <StyledLink href="#" aria-label="Juega ahora">
                <ButtonWrapper>
                  <ButtonContent>juega ahora</ButtonContent>
                </ButtonWrapper>
              </StyledLink>

              <Wrapper>
                <IconFieldContainer>
                  {icons.map((icon) => (
                    <IconField
                      key={icon.key}
                      onClick={() => swapFrame(icon.key)}
                      selected={selected === icon.key}
                    >
                      <IconImage src={icon.img} alt={icon.label} />
                      <SubIconText>{icon.label}</SubIconText>
                    </IconField>
                  ))}
                </IconFieldContainer>
              </Wrapper>
            </TextContainer>
          </ContentColumn>

          <HeroImageContainer>
            <BorderVideo>
              <Video
                autoPlay
                muted
                loop
                playsInline
                src={videoLink}
                aria-label={`Video modo de juego: ${selected}`}
              />
            </BorderVideo>
            <TextVideoContainer>
              <TitleTextVideo>EL MODO DE JUEGO MÁS POPULAR</TitleTextVideo>
              <SubTitleTextVideo>
                Despeja tu carril, sumérgete en batallas épicas en equipo de 5v5
                y destruye el nexo enemigo antes de que destruyan el tuyo.
              </SubTitleTextVideo>
            </TextVideoContainer>
          </HeroImageContainer>
        </ContentWrapper>
      </OverlayContainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  background-image: url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?auto=format&fit=fill&q=80&w=1069");
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
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentColumn = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 32px;
  margin: 10px 0;
`;

const Subtitle = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 80px;
  line-height: 88px;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
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
  text-decoration: none;

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IconFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const IconField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 300ms, opacity 300ms;
  cursor: pointer;
  text-align: center;
  max-width: 64px;
  margin-top: 30px;
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  opacity: ${(props) => (props.selected ? 1 : 0.4)};
  outline: none;

  &:focus {
    outline: 2px solid #c8aa6e;
    outline-offset: 2px;
  }
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SubIconText = styled.div`
  font-family: Spiegel, sans-serif;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  word-break: normal;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin-top: 10px;
`;

const BorderVideo = styled.div`
  width: clamp(180px, 40vw, 520px);
  height: clamp(180px, 40vw, 520px);
  border-radius: 50%;
  border: 4px solid rgb(200, 170, 110);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const TextVideoContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const TitleTextVideo = styled.div`
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
`;

const SubTitleTextVideo = styled.div`
  font-family: Spiegel, sans-serif;
`;
