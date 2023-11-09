import React from "react";
import styled from "styled-components";
import Logo from "./Templates/Logo";
import Navbar from "./Templates/Navbar";
import Buttons from "./Templates/Buttons";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <FlexStart>
          <Logo />
          <Navbar />
        </FlexStart>

        <FlexEnd>
          <Buttons />
        </FlexEnd>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  /* padding: 1rem; */
  width: 100%;
  margin-top: 3em;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  /* background-color: green; */
  width: 50%;
`;
const FlexStart = styled.div`
  display: flex;
  width: 50%;
`;
