import styled from "styled-components";
import Logo from "../../img/book-logo.png";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #3c5b6f;
  color: #f5efe6;
  transition: 500ms background linear;
  font-size: 14px;
  max-width: 150px;
  text-align: center;
  border: none;
  &:hover,
  &:focus {
    background-color: #153448;
  }
`;

const HeaderAuth = () => {
  return (
    <Wrap>
      <Link to={"/"}>
        <LogoImg src={Logo} alt="Logo" />
      </Link>
      <Button type="button">Вийти</Button>
    </Wrap>
  );
};

export default HeaderAuth;
