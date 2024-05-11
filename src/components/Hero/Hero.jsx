import styled from "styled-components";
import Books from "../../img/hero.png";

const Container = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 50px;
  }
`;
const Img = styled.img`
  @media screen and (min-width: 480px) {
    max-width: 400px;
  }
`;
const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 10px 0;
  font-family: "Lobster", sans-serif;
  text-transform: uppercase;
  color: #153448;
  @media screen and (min-width: 480px) {
    font-size: 58px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Img src={Books} alt="Stack of books" />
      <Title>Між сторінками: знайдіть свій наступний розділ</Title>
    </Container>
  );
};

export default Hero;
