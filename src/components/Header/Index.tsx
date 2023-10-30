import React from "react";
import styled from "styled-components";
import Logo from "./Templates/Logo";
import Links from "./Templates/Links";
import Buttons from "./Templates/Buttons";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <Links />
        <Buttons />
      </HeaderContainer>
    </>
  );
}

export const HeaderContainer = styled.div`
  flex-direction: row;
`;
