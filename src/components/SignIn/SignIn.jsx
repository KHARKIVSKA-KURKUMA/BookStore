import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 40px;
`;
const FormWrap = styled.form`
  background-color: rgba(60, 91, 111, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;
const Title = styled.p`
  font-size: 38px;
  text-align: center;
  margin: 10px 0;
  font-family: "Lobster", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Submit = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #3c5b6f;
  color: #f5efe6;
  transition: 500ms background linear;
  font-size: 14px;
  max-width: 150px;
  text-align: center;
  border: none;
  display: block;
  margin: 15px auto 0;
  &:hover,
  &:focus {
    background-color: #153448;
  }
  &:disabled {
    background-color: #676767;
  }
`;
const Box = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;
const StyledLink = styled(Link)`
  color: #212529;
  font-weight: 700;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log("user :>> ", user);
  };

  const isValid =
    Boolean(passwordError) !== true &&
    Boolean(error) !== true &&
    email !== "" &&
    password !== "";

  const handleEmailChange = (e) => {
    const newEmail = e.currentTarget.value;
    setEmail(newEmail);
    if (emailRegExp.test(newEmail)) {
      setError(false);
    } else {
      setError(true);
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.currentTarget.value;
    setPassword(newPassword);
    if (newPassword.length >= 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <Container>
      <FormWrap>
        <Title>Авторизація</Title>
        <List>
          <li>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!error}
              isValid={!error}
              required
            />
          </li>
          <li>
            <Form.Label htmlFor="inputPassword">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword"
              placeholder="password"
              value={password}
              isInvalid={!!passwordError}
              isValid={!passwordError}
              onChange={handlePasswordChange}
              required
            />
          </li>
        </List>
        <Box>
          <p>Не маєте акаунту?</p>
          <StyledLink to={"/register"}>Реєстрація</StyledLink>
        </Box>
        <Submit disabled={!isValid} type="button" onClick={handleSubmit}>
          Надіслати
        </Submit>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
