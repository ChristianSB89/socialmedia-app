import styled from "styled-components";

export const CardBody = styled.section`
  width: 300px;
  height: 570px;
  margin: 1em auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(116, 116, 116, 0.4) 100%
  );
  backdrop-filter: blur(8px);
  border-top: 1px white solid;
`;

export const AvatarStyle = styled.img`
  width: 30px;
  height: 30px;
  border: 1px black solid;
  border-bottom: 2px black solid;
  object-fit: cover;
`;

export const Username = styled.h2`
  font-size: 1em;
  font-weight: 500;
`;

export const CardHeader = styled.section`
  height: 30px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    193.83deg,
    rgba(255, 255, 255, 0) 9.88%,
    rgba(255, 255, 255, 0.2) 90.17%
  );
  border-top: 1px solid #ffffff;
  border-radius: 20px;
  gap: 10px;
`;
