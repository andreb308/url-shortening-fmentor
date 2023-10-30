import React from "react";
import URLBackgroundPath from "../../../assets/images/bg-shorten-desktop.svg";
import styled from "styled-components";
import { Button } from "../../Header/Templates/Buttons";

export default function URLShortener() {
  return (
    <Container>
      <URLInput placeholder="Shorten a link here..." />
      <ShortenButton callToAction>Shorten It!</ShortenButton>
    </Container>
  );
}

const URLInput = styled.input`
  width: 60%;
  height: 40%;
  border-radius: inherit;
  border: 0;
  padding: 0 1em;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

const Container = styled.div`
  position: absolute;
  top: calc(-84px * 1.2); // metade da altura
  background-color: hsl(257, 27%, 26%);
  background-image: url(${URLBackgroundPath});
  background-size: cover;
  width: calc(1110px * 1.2);
  height: calc(168px * 1.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 12px;
`;

export const ShortenButton = styled(Button)`
  padding: 0.7em 2em;
  font-size: 1.5rem;
  border-radius: inherit;
`;
