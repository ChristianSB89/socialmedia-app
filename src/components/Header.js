import React from "react";
import Logo from "../img/wasdup-logo-finished.png";
import SearchIcon from "../img/search_icon.png";
import Avatar from "../img/avatar-placeholder.png";
import Gamer from "../img/gamer.svg";
import Menu from "../img/menu.png";
import {
  BottomHeader,
  BottomImg,
  HeaderAvatar,
  HeaderStyling,
  IconSearch,
  InputField,
  LogoStyle,
  MiniNav,
  TopHeader,
} from "../styles/headerStyle";

function Header() {
  return (
    <HeaderStyling>
      <TopHeader>
        <LogoStyle src={Logo}></LogoStyle>
        <IconSearch src={SearchIcon}></IconSearch>
      </TopHeader>
      <BottomHeader>
        <MiniNav>
          <HeaderAvatar src={Avatar}></HeaderAvatar>
          <InputField placeholder="Any thoughts?"></InputField>
        </MiniNav>
        <MiniNav>
          <BottomImg src={Gamer}></BottomImg>
          <BottomImg src={Menu}></BottomImg>
        </MiniNav>
      </BottomHeader>
    </HeaderStyling>
  );
}

export default Header;
