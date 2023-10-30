import React from "react";
import styled from "styled-components";
import LogoURL from "../../../assets/images/logo.svg";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoIMG src={LogoURL} alt="Shortly"></LogoIMG>
    </LogoContainer>
  );
}

// STYLES

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIMG = styled.img``;
