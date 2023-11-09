import React from "react";
import styled from "styled-components";

export default function Navbar() {
  const navbarLinks = [
    {
      name: "Features",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Resources",
      link: "/",
    },
  ];
  return (
    <NavbarContainer>
      {navbarLinks.map((l) => (
        <Link href={l.link}>{l.name}</Link>
      ))}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 0 1em;
  font-weight: 700;
  color: hsl(0, 0%, 50%);
  opacity: 0.7;
  &:hover {
    color: inherit;
    opacity: 1;
  }
`;
