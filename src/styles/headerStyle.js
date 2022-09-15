import styled from "styled-components";

export const LogoStyle = styled.img`
  width: 40px;
  padding: 1em;
  opacity: 90%;
`;

export const IconSearch = styled.img`
  width: 25px;
  padding: 1em;
  opacity: 90%;
`;

export const BottomImg = styled.img`
  width: 25px;
  padding: 0;
  margin-right: 1em;
  opacity: 90%;
`;

export const HeaderAvatar = styled.img`
  width: 30px;
  height: 30px;
  border: 1px black solid;
  border-bottom: 2px black solid;
  object-fit: cover;
  margin: 0 1em;
`;

export const HeaderStyling = styled.section`
  height: 7.5em;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.09) 48.96%,
    rgba(0, 0, 0, 0.09) 100%
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  z-index: 99;
`;

export const TopHeader = styled.section`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomHeader = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
`;

export const InputField = styled.input`
  width: 15em;
  height: 2.125em;
  border-radius: 10px;
`;

export const MiniNav = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
