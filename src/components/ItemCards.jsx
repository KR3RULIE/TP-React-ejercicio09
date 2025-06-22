import { Col, Button, Card } from "react-bootstrap";
import "../index.css";

const ItemCards = ({ cita }) => {
  return (
    <Col>
      <Card className="text-center">
        <Card.Header className="d-flex align-items-center gap-4">
          <div className="circuloCeleste"></div>
          <div className="text-start">
            <Card.Text className="mb-1 fw-bold">
              Mascota: {cita.nombreMascota}
            </Card.Text>
            <Card.Text className="mb-0">Dueño: {cita.nombreDuenio}</Card.Text>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ItemCards;
