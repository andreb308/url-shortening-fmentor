import React from "react";
import styled from "styled-components";
import Card from "./Card";

export default function StatsTimeline() {
  const statsData = [
    {
      icon: "Brand Recognition",
      title: "Brand Recognition",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit magni at quis ab beatae debitis sint libero laudantium similique.",
    },
    {
      icon: "Detailed Records",
      title: "Detailed Records",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis omnis repudiandae iure, sed repellat quisquam accusantium architecto ab non!",
    },
    {
      icon: "Fully Customizable",
      title: "Fully Customizable",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatibus ad similique dignissimos!",
    },
  ];

  return (
    <Container>
      {statsData.map((s, index) => (
        <Card
          description={s.description}
          icon={s.icon}
          index={index}
          title={s.title}
          key={index}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  /* background-color: aqua; */
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 2rem; */
  }
`;
