import styled from "styled-components";

const books = [
  {
    _id: "663f6923681c2e200135f9f0",
    author: "Chinua Achebe",
    lang: "en",
    pages: 209,
    title: "Things Fall Apart",
    link: "https://m.media-amazon.com/images/I/91NtvTU0xEL._AC_UF1000,1000_QL80_.jpg",
    owner: "663f622172dde3ac3d3aa626",
  },
];
const List = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 50px 20px 20px;
    border-radius: 10px;
  }
  .title {
    font-weight: 700;
  }
  img {
    width: 140px;
    margin-right: 20px;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`;

const BookList = () => {
  return (
    <List>
      <ul>
        {books.length !== 0 &&
          books.map((book) => (
            <li key={book._id}>
              <img src={book.link} alt={book.title} />
              <div>
                <p className="title">{book.title}</p>
                <p>Мова: {book.lang}</p>
                <p>Сторінки: {book.pages}</p>
              </div>
            </li>
          ))}
      </ul>
    </List>
  );
};

export default BookList;
