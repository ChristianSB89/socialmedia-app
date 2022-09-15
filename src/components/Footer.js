import React from "react";
import Games from "../img/joystick.png";
import Home from "../img/Home.png";
import Chat from "../img/chat.png";
import Boyband from "../img/boyband.png";
import { FooterContainer, FooterImg } from "../styles/footerStyle";

function Footer() {
  return (
    <FooterContainer>
      <FooterImg src={Games}></FooterImg>
      <FooterImg src={Home}></FooterImg>
      <FooterImg src={Chat}></FooterImg>
      <FooterImg src={Boyband}></FooterImg>
    </FooterContainer>
  );
}

export default Footer;
