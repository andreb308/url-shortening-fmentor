import "./App.css";
import Header from "./components/Header/Index";
import HeroSection from "./components/HeroSection/Index";
import styled from "styled-components";
import SubSection from "./components/SubSection/Index";
import StatsSection from "./components/StatsSection/Index";

function App() {
  return (
    <Container>
      <Main>
        <Header />
        <HeroSection />
      </Main>
      <SubSection />
      <StatsSection />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  /* margin: 0 50px; */
  width: 100%;
  min-height: 100vh;
`;
const Main = styled.div`
  max-width: 1440px;
  width: 80%;
`;
