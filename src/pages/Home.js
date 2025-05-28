import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header>
        <VideoContainer>
          <StyledVideo autoPlay muted loop playsInline>
            <source
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
              type="video/webm"
            />
            Tu navegador no soporta video HTML5.
          </StyledVideo>
        </VideoContainer>
      </Header>
      <Section>
        <ImageContainer>
          <img
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a6f94cd5ed222d3b99e535f17cd9592d3c716bb5-3840x1616.png?auto=format&amp;fit=fill&amp;q=80&amp;h=816"
            alt=""
            loading="lazy"
            data-testid="backdrop-background-image"
            role="presentation"
          />
        </ImageContainer>
        <Overlay>
          <OverlayContainer>
            <div>IMage</div>
            <TextAndButtonContainer>
              <TextContainer>
                <P1>DOMINA CON</P1>
                <P2>ESTILO</P2>
                <P3>
                  Cambia la apariencia de tus campeones favoritos con aspectos y
                  personaliza tu estilo.
                </P3>
              </TextContainer>
              <div>
                <A>
                  <SPAN>
                    <ASD>juega ahora</ASD>
                  </SPAN>
                </A>
              </div>
            </TextAndButtonContainer>
          </OverlayContainer>
        </Overlay>
      </Section>
    </Container>
  );
}

const A = styled.a`
  display: block;
  width: fit-content;
  color: black;
  background-color: #c8aa6e;
  padding: 19px 32px;
  text-transform: uppercase;
`;

const SPAN = styled.span`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

const ASD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: center;
`;

const P1 = styled.div`
  word-break: break-word;
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 32px;
  margin: 10px 0 10px;
`;
const P2 = styled.div`
  overflow-wrap: break-word;
  word-break: break-word;
  font-family: "Beaufort for LOL", sans-serif;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 80px;
  line-height: 88px;
`;

const P3 = styled.div`
  font-family: Spiegel, sans-serif;
  font-weight: 400;
  word-break: break-word;
  font-size: 18px;
  line-height: 26px;
  color: rgb(255, 255, 255);
  margin: 10px 0 40px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextAndButtonContainer = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 50%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const OverlayContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  position: relative;
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #ccc;
  }
`;
