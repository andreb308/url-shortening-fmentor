import React, { useState } from "react";
import URLBackgroundPath from "../../../assets/images/bg-shorten-desktop.svg";
import styled from "styled-components";
import { Button } from "../../Header/Templates/Buttons";

export default function URLShortener() {
  const [link, setLink] = useState("https://serrajr.eng.br");

  const handleShorten = () => {
    return "https://rel.ink/testing";
  };

  return (
    <Container>
      <URLInput
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
        placeholder="Shorten a link here..."
      />
      <ShortenButton onClick={handleShorten} callToAction>
        Shorten It!
      </ShortenButton>
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
  top: -70px; // metade da altura
  background-color: hsl(257, 27%, 26%);
  background-image: url(${URLBackgroundPath});
  background-size: cover;
  width: 70%;
  height: 140px;
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
