import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { SlClose } from "react-icons/sl";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const FormWrap = styled.form`
  background-color: #f5efe6;
  padding: 30px 20px 20px;
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;
const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  color: #153448;
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

const Close = styled(SlClose)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const OrderForm = ({ data, onClose, bookId }) => {
  const isEdited = data !== undefined;
  const [name, setName] = useState(data !== undefined ? data.name : "");
  const [surname, setSurname] = useState(
    data !== undefined ? data.surname : ""
  );
  const [city, setCity] = useState(data !== undefined ? data.city : "");
  const [country, setCountry] = useState(
    data !== undefined ? data.country : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { name, surname, city, country };
    console.log(newOrder);
    if (isEdited) {
      const orderId = data._id;
      const bookId = data.bookId;

      console.log("оновити ");
    } else {
      console.log("додати ");
    }
  };

  const isValid =
    name !== "" && surname !== "" && city !== "" && country !== "";

  return (
    <Backdrop>
      <FormWrap onSubmit={handleSubmit}>
        <Close size={30} onClick={onClose} />
        <Title>{isEdited ? "Змінити" : "Додати"} замовлення</Title>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Ім'я
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Прізвище
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Місто
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Kherson"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Країна
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Ukraine"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Submit type="submit" disabled={!isValid}>
          {isEdited ? "Змінити" : "Додати"}
        </Submit>
      </FormWrap>
    </Backdrop>
  );
};

export default OrderForm;
