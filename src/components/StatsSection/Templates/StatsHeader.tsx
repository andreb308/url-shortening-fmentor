import React from "react";
import styled from "styled-components";

export default function StatsHeader() {
  return (
    <Container>
      <Title>Advanced Statistics</Title>
      <SubTitle>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </SubTitle>
    </Container>
  );
}
const Container = styled.div`
  /* min-height: 500px; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  /* font-size: 3rem; */
  font-weight: 800;
  margin-bottom: 0;
`;

const SubTitle = styled.h3`
  width: 70%;
  color: hsl(0, 0%, 50%);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
