import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemCards from "./ItemCards";

const ColumasCard = ({ citas }) => {
  return (
    <Container>
      <Row>
        <ItemCards citas={citas}></ItemCards>
      </Row>
    </Container>
  );
};

export default ColumasCard;
