import React from "react";
import styled from "styled-components";

export default function Buttons() {
  return (
    <ButtonsContainer>
      <Button>Login</Button>
      <Button callToAction>Sign Up</Button>
    </ButtonsContainer>
  );
}

type ButtonProps = {
  callToAction?: boolean;
};

const ButtonsContainer = styled.div`
  display: flex;
`;

export const Button = styled.a<ButtonProps>`
  text-decoration: none;
  color: ${(props) => (props.callToAction ? "white" : "grey")};
  padding: 0.5em 1.4em;
  background-color: ${(props) =>
    props.callToAction ? "hsl(180, 66%, 49%)" : "transparent"};
  border-radius: 50px;
  white-space: nowrap;

  /* @media (max-width: 768px) {
    // unwrap text
  } */

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.callToAction ? "white" : "grey")};
    opacity: 0.5;
  }
`;
