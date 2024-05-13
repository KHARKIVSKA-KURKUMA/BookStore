import styled from "styled-components";
import noDataImage from "../../img/noData.png";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  margin: 0 auto;
`;

const Image = styled.img`
  max-width: 350px;
  height: auto;
`;

const Message = styled.h3`
  font-size: 32px;
  color: #555;
  margin-top: 10px;
  font-weight: 700;
`;

const NoDataComponent = () => {
  return (
    <Container>
      <Image src={noDataImage} alt="No Data" />
      <Message>Немає записів!</Message>
    </Container>
  );
};

export default NoDataComponent;
