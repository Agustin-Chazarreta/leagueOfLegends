import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
export default function Layout(props) {
  return (
    <>
      <Image>
        <img
          alt="leagueOfLegends"
          className="logoIMG"
          src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo.png"
        ></img>
      </Image>
      <NavBar>
        <Link to="/">Inicio</Link>
        <Link to="/champions">Champions</Link>
        <Link to="/news">News</Link>
        <Link to="/rotation">Free Rotation</Link>
        <Link to="/minigame">Mini Game</Link>
      </NavBar>
      {props.children}
      <SocialBar>
        Seguinos en nuestras redes sociales: <AiFillInstagram /> <BsFacebook />
        <AiFillTwitterCircle /> <AiFillYoutube />
        <FaDiscord />
      </SocialBar>
    </>
  );
}

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;
const NavBar = styled.div`
  color: white;
  background-color: rgb(0, 102, 128);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
`;
const SocialBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: black;
  width: 100%;
  color: white;
`;
