import { Container, Row } from "react-bootstrap";
import ColumasCard from "./ColumasCard";

const CitasRow = ({ citas, borrarCita }) => {
  return (
    <section className="container sombra bg-info-subtle rounded my-3">
      <h3 className="text-center text-danger">Listado de citas</h3>
      {citas.length === 0 && (
        <p className="text-center text-warning fs-5 fw-bold fst-italic">
          No hay citas registradas.
        </p>
      )}
      {citas.length !== 0 && (
        <Container>
          <Row>
            {citas.map((cita, indice) => (
              <ColumasCard
                key={indice}
                cita={cita}
                indice={indice}
                borrarCita={borrarCita}
              />
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default CitasRow;
