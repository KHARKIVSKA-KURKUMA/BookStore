import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 60px;
  }
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
