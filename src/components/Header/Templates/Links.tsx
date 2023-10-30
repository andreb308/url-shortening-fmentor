import React from "react";
import styled from "styled-components";

export default function Links() {
  const navbarLinks = [
    {
      name: "Features",
      link: "/test1",
    },
    {
      name: "Pricing",
      link: "/test2",
    },
    {
      name: "Resources",
      link: "/test3",
    },
  ];
  return (
    <LinksContainer>
      {navbarLinks.map((l) => (
        <Link href={l.link}>{l.name}</Link>
      ))}
    </LinksContainer>
  );
}

const LinksContainer = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  padding: 0 1em;
  font-weight: 700;
  color: hsl(0, 0%, 50%);
`;
