import React from "react";
import styled from "styled-components";
import WorkingURL from "../../assets/images/illustration-working.svg";
import { Button } from "../Header/Templates/Buttons";

export default function HeroSection() {
  return (
    <HeroContainer>
      <LeftSide>
        <TextContainer>
          <Title>More than just shorter links</Title>
          <Slogan>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Slogan>
        </TextContainer>
        <ButtonContainer>
          <HeroButton callToAction> Get Started </HeroButton>
        </ButtonContainer>
      </LeftSide>

      <RightSide>
        <WorkingIMG src={WorkingURL} alt="Work"></WorkingIMG>
      </RightSide>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  min-height: 680px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: auto;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
`;
const TextContainer = styled.div`
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 2rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: -60px;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
  }
`;

const Slogan = styled.h2`
  font-weight: 500;
  color: hsl(0, 0%, 75%);
  margin-top: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
`;

const WorkingIMG = styled.img`
  width: 120%;

  /* position: absolute;
  top: 0;
  left: 0; */

  @media (max-width: 768px) {
    width: 150%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroButton = styled(Button)`
  font-size: 1.3rem;

  @media (max-width: 768px) {
    padding: 0.5em 2em;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
