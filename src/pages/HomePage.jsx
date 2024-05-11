import styled from "styled-components";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Container = styled.div`
  /* padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 40px;
  } */
`;
const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default HomePage;
