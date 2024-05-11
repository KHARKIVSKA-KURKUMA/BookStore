import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
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

const AddBook = () => {
  return (
    <Container>
      <Button type="button">Додати книгу</Button>
    </Container>
  );
};

export default AddBook;
