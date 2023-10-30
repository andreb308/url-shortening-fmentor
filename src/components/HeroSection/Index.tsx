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
            links are performing
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
  width: 80%;
  height: 500px;
  display: flex;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;

const RightSide = styled.div`
  width: 30%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 0;
`;

const Slogan = styled.h2`
  font-weight: 500;
  color: hsl(0, 0%, 75%);
  margin-top: 1rem;
  margin-right: 1rem;
`;

const WorkingIMG = styled.img`
  width: 200%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const HeroButton = styled(Button)`
  font-size: 1.3rem;
`;
