import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <HeaderImageBox>
        <TextVideo></TextVideo>
      </HeaderImageBox>
      <MainContent>
        <Titulo>Welcome to the Summoner's Rift</Titulo>
        <Descripcion>
          Dive into the universe of League of Legends. Discover your favorite
          champions, relive epic cinematics, and stay up to date with the most
          important events in the world of Runeterra.
        </Descripcion>

        <VideoWrapper>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=mDYqT0_9VR4&ab_channel=LeagueofLegends"
            playing
            muted
            controls
            width="100%"
            height="100%"
          />
        </VideoWrapper>

        <VideoDescripcion>
          <p>
            This cinematic marked the beginning of the 2022 Season. A story full
            of action, choices, and battles that inspire all summoners.
          </p>
        </VideoDescripcion>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  background-color: #0a0a0a;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const HeaderImageBox = styled.div`
  position: relative;
`;

const TextVideo = styled.div`
  position: absolute;
  top: 30%;
  left: 30px;
  width: 400px;
  font-style: italic;
  font-size: 25px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const MainContent = styled.div`
  padding: 60px 30px;
  text-align: center;
`;

const Titulo = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #fff;
`;

const Descripcion = styled.p`
  font-size: 18px;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin: 0 auto;
  max-width: 900px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  iframe,
  video {
    border-radius: 12px;
  }
`;

const VideoDescripcion = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: #bbb;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
