import React from "react";
import styled from "styled-components";
import URLShortener from "./Templates/URLShortener";
import ShortenedList from "./Templates/ShortenedList";

export default function SubSection() {
  return (
    <Container>
      <URLShortener />
      <ShortenedList />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-color: rgba(239, 241, 247, 255);
  /* min-height: 1000px; */
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
