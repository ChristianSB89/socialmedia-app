import React from "react";
import {
  AvatarStyle,
  CardBody,
  CardHeader,
  Username,
} from "../styles/cardStyle";
import Avatar from "../img/avatar-placeholder.png";

function Feed() {
  return (
    <CardBody>
      <CardHeader>
        <AvatarStyle src={Avatar}></AvatarStyle>
        <Username>NiceUsername69</Username>
      </CardHeader>
    </CardBody>
  );
}

export default Feed;
