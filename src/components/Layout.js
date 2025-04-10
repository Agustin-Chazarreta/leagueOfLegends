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
    <Wrapper>
      <Header>
        <Logo
          src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo.png"
          alt="League of Legends Logo"
        />
      </Header>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/champions">Champions</StyledLink>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/rotation">Free Rotation</StyledLink>
        <StyledLink to="/minigame">Mini Game</StyledLink>
      </NavBar>

      <Content>{props.children}</Content>

      <Footer>
        <p>Follow us on our social media:</p>
        <IconGroup>
          <AiFillInstagram size={28} />
          <BsFacebook size={26} />
          <AiFillTwitterCircle size={28} />
          <AiFillYoutube size={30} />
          <FaDiscord size={26} />
        </IconGroup>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  background-color: black;
`;

const Logo = styled.img`
  width: 300px;
  max-width: 80%;

  @media (max-width: 600px) {
    width: 220px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #004466;
  padding: 15px 10px;
  gap: 30px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10%;
    width: 80%;
    height: 3px;
    background-color: #ffcc00;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Content = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #111;
  color: #ccc;
  padding: 20px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  svg {
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      color: #ffcc00;
    }
  }
`;
