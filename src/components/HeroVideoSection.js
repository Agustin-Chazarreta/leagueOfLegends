import React from "react";
import styled from "styled-components";

export default function HeroVideoSection() {
  return (
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
  );
}

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
