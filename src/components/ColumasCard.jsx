import { Col, Button, Card } from "react-bootstrap";
import "../index.css";

const ColumasCard = ({ cita }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="text-center mb-4">
        <Card.Header className="d-flex align-items-center gap-4">
          <div className="circuloCeleste"></div>
          <div className="text-start">
            <Card.Text className="mb-1 fw-bold">
              Mascota: {cita.nombreMascota}
            </Card.Text>
            <Card.Text className="mb-0">Dueño: {cita.nombreDuenio}</Card.Text>
          </div>
        </Card.Header>

        <Card.Body className="text-start ms-">
          <Card.Text>Fechas: {cita.fecha}</Card.Text>
          <Card.Text>Hora: {cita.hora}</Card.Text>
          <Card.Text>Sintomas: {cita.sintomas}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ColumasCard;
