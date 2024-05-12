import styled from "styled-components";
import Logo from "../../img/book-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/authThunks";

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

const Orders = styled(Link)`
  color: #153448;
  margin-right: 40px;
`;

const HeaderAuth = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrap>
      <Link to={"/"}>
        <LogoImg src={Logo} alt="Logo" />
      </Link>
      <div>
        {pathname !== "/author" && pathname !== "/client/orders" && (
          <Orders to={"/client/orders"}>Мої замовлення</Orders>
        )}
        {pathname !== "/author" && pathname !== "/client" && (
          <Orders to={"/client"}>Повернутись на головну</Orders>
        )}
        <Button type="button" onClick={handleLogout}>
          Вийти
        </Button>
      </div>
    </Wrap>
  );
};

export default HeaderAuth;
