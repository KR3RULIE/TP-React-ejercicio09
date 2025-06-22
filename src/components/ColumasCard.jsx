import { Container, Row } from "react-bootstrap";
import ItemCards from "./ItemCards";

const ColumasCard = ({ cita }) => {
  return (
    <Container>
      <Row>
        <ItemCards cita={cita}></ItemCards>
      </Row>
    </Container>
  );
};

export default ColumasCard;
