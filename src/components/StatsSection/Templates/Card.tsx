import React from "react";
import styled from "styled-components";
import IconURL from "../../../assets/images/icon-brand-recognition.svg";

export default function Card({ icon, title, description, index }: CardProps) {
  return (
    <Container index={index}>
      <Title>{title}</Title>
      <IconContainer>
        <Icon src={IconURL} />
      </IconContainer>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 350px;
  height: 300px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  margin-top: calc((${(p) => p.index} * 100px));
  position: relative;

  @media (max-width: 768px) {
    width: 300px;
    min-height: 250px;
    margin-top: 100px;
  }
`;

const Title = styled.p`
  margin-top: 20%;
  margin-left: 25px;
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
    font-weight: 800;
    margin-left: 0;
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: -45px;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 100px;
  background-color: hsl(260, 8%, 14%);
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    left: 110px;
  }
`;

const Icon = styled.img``;

const Description = styled.p`
  text-align: justify;
  font-weight: 500;
  margin: 0 25px;
  color: hsl(0, 0%, 50%);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

type CardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

type ContainerProps = { index: number };
