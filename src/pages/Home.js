import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="headerImgBox">
        <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt686035e751b05708/61d8fb621757dc6aed2adafc/SS22_TheCall_thumbnail_v2.jpg" />
        <TextVideo>
          <div>
            <h1>The Call: Cinemática Season 2022</h1>
          </div>
          <div>
            <h2>Un nuevo camino te llama. ¿Cómo responderás?</h2>
          </div>
        </TextVideo>
        <Video>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=mDYqT0_9VR4&ab_channel=LeagueofLegends"
            controls
            muted={true}
            playing={true}
            height={600}
            width={1200}
          ></ReactPlayer>
        </Video>
      </div>
      <div>asdsdsdsdsdsdsdsdsdsdsdsdsdsd</div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  text-align: left;
  color: white;
`;
const Image = styled.img`
  width: 100%;
  height: 650px;
  opacity: 0.9;
  filter: brightness(30%);
`;
const TextVideo = styled.div`
  letter-spacing: 1.5px;
  position: absolute;
  top: 30%;
  left: 30px;
  height: 400px;
  width: 400px;
  font-style: italic;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  background-size: cover;

  h2 {
    font-size: 20px;
  }
`;
const Video = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
`;
