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

const BookForm = ({ data, onClose }) => {
  const isEdited = data !== undefined;
  const [author, setAuthor] = useState(data !== undefined ? data.author : "");
  const [title, setTitle] = useState(data !== undefined ? data.title : "");
  const [image, setImage] = useState(data !== undefined ? data.link : "");
  const [language, setLanguage] = useState(data !== undefined ? data.lang : "");
  const [pages, setPages] = useState(data !== undefined ? data.pages : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { author, title, link: image, language, pages };
    console.log(newBook);

    if (isEdited) {
      const bookId = data._id;
      console.log("оновити книгу");
    } else {
      console.log("додати книгу");
    }
    // setAuthor('');
    // setTitle('');
    // setImage('');
    // setLanguage('');
    // setPages('');
  };

  const handlePagesChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/\D/g, "");
    setPages(filteredInput);
  };

  const isValid =
    author !== "" &&
    title !== "" &&
    image !== "" &&
    language !== "" &&
    pages !== "";

  return (
    <Backdrop>
      <FormWrap onSubmit={handleSubmit}>
        <Close size={30} onClick={onClose} />
        <Title>{isEdited ? "Оновити" : "Додати"} книгу</Title>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Автор
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Name Surname"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Назва
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Зображення
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="https://m.media-amazon.com/images/I/91NtvTU0xEL._AC_UF1000,1000_QL80_.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Мова
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="en"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Сторінки
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={pages}
              onChange={handlePagesChange}
              placeholder="200"
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

export default BookForm;
