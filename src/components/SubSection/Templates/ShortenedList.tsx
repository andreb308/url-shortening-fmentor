import React from "react";
import styled from "styled-components";

type CopyBtnProps = {
  copied?: boolean;
};

export default function ShortenedList() {
  const links: LinkData[] = [
    {
      longLink:
        "https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component",
      shortenedLink: "https://rel.ink/testing",
    },
    {
      longLink: "https://github.com/andreb308/url-shortening-fmentor",
      shortenedLink: "https://rel.ink/testing",
    },
    {
      longLink: "https://github.com/andreb308/url-shortening-fmentor",
      shortenedLink: "https://rel.ink/testing",
    },
  ];

  return (
    <Container>
      {links.map((link) => (
        <ShortenedListItem linkData={link} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**********************************************************************************************/
type LinkData = { longLink: string; shortenedLink: string };
type ShortenedLinkProps = {
  linkData: LinkData;
};

function ShortenedListItem({ linkData }: ShortenedLinkProps) {
  const { longLink, shortenedLink } = linkData;
  return (
    <ShortenedLinkContainer>
      <TestDiv>
        <LongLink>{longLink}</LongLink>
      </TestDiv>
      <HR />
      <FlexEnd>
        <ShortenedLink>{shortenedLink}</ShortenedLink>
        <CopyButton>Copy</CopyButton>
      </FlexEnd>
    </ShortenedLinkContainer>
  );
}

const HR = styled.hr`
  display: none;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: block;
    width: calc(100% + 2rem);
  }
`;

const ShortenedLinkContainer = styled.div`
  width: 70vw;
  height: 75px;
  margin-top: 1rem;
  background-color: white;
  border-radius: 6px;
  /* padding: 0em 1.2em; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
    flex-direction: column;
    height: auto;
  }
`;

const TestDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LongLink = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 1.3rem;
  /* display: flex;
  min-width: 0;

  align-items: center; */
  width: 90%;
  /* padding: 0 50px; */
  /* height: 100%; */
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const ShortenedLink = styled.a`
  font-weight: 500;
  display: flex;
  align-items: center;
  /* width: 60%; */
  /* height: 100%; */
  /* margin: 0; */
  font-size: 1.5rem;
  color: hsl(180, 66%, 49%);

  @media (max-width: 768px) {
    text-align: left;
    width: 100%;
    font-size: 1rem;
  }
`;

const CopyButton = styled.button<CopyBtnProps>`
  text-decoration: none;
  color: white;
  padding: 0.5em 1.4em;
  background-color: ${(props) =>
    props.copied ? "hsl(255, 11%, 22%)" : "hsl(180, 66%, 49%)"};
  padding: 0.4em 2em;
  font-size: 1.2rem;
  border-radius: 6px;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const FlexEnd = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    flex-direction: column;
  }
`;
