import React from "react";
import {
  AvatarStyle,
  CardBody,
  CardHeader,
  ImagePost,
  Interaction,
  TextPost,
  Username,
} from "../styles/cardStyle";
import Avatar from "../img/avatar-placeholder.png";
import PCSetup from "../img/pcsetup.jpg";
import Comment from "../img/Comment.png";
import Share from "../img/share.png";
import ThumbsUp from "../img/thumbs-up.png";

function Feed() {
  return (
    <CardBody>
      <CardHeader>
        <AvatarStyle src={Avatar}></AvatarStyle>
        <Username>NiceUsername69</Username>
      </CardHeader>
      <ImagePost src={PCSetup}></ImagePost>
      <TextPost>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          duis semper pharetra sagittis, mattis cursus augue nam. Senectus dis
          fusce vitae nibh. Felis sagittis quam quis pretium facilisi. Vitae in
          tempor sed arcu.
        </p>
      </TextPost>
      <Interaction>
        <img src={ThumbsUp}></img>
        <img src={Comment}></img>
        <img src={Share}></img>
      </Interaction>
    </CardBody>
  );
}

export default Feed;
