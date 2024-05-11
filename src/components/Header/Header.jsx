import styled from "styled-components";
import Logo from "../../img/book-logo.png";
import { Link, useLocation } from "react-router-dom";

const Wrap = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 50px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #3c5b6f;
  color: #f5efe6;
  transition: 500ms background linear;
  font-size: 14px;
  max-width: 150px;
  text-align: center;
  &:hover,
  &:focus {
    background-color: #153448;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Wrap>
      <LogoImg src={Logo} alt="Logo" />
      {pathname === "/login" || pathname === "/register" ? (
        <Button to={"/"}>Головна</Button>
      ) : (
        <Button to={"/login"}>Авторизація</Button>
      )}
    </Wrap>
  );
};

export default Header;
