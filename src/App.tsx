import "./App.css";
import Header from "./components/Header/Index";
import HeroSection from "./components/HeroSection/Index";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <HeroSection />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 100px 50px; */
  width: 80%;
  min-height: 100vh;
`;
