import React from "react";
import StatsHeader from "./Templates/StatsHeader";
import styled from "styled-components";
import StatsTimeline from "./Templates/StatsTimeline";

export default function StatsSection() {
  return (
    <Background>
      <Container>
        <StatsHeader />
        <StatsTimeline />
      </Container>
    </Background>
  );
}

const Container = styled.div`
  /* margin-top: 10rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: black; */
  /* min-height: 1000px; */
  width: 80%;
  position: relative;
  margin-bottom: 100px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: rgba(239, 241, 247, 255);
  min-height: 1000px;
  width: 100%;
`;
