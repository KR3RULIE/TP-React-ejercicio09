import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import CitasRow from "./CitasRow";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [errors, setErrors] = useState({});
  const [citas, setCitas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (nombreMascota.trim().length < 2 || nombreMascota.trim().length > 50) {
      nuevosErrores.nombreMascota =
        "Este campo debe tener entre 2 y 50 caracteres.";
    }

    if (nombreDuenio.trim().length < 2 || nombreDuenio.trim().length > 50) {
      nuevosErrores.nombreDuenio =
        "Este campo debe tener entre 2 y 50 caracteres.";
    }

    if (!fecha) {
      nuevosErrores.fecha = "La fecha es obligatoria.";
    }

    if (!hora) {
      nuevosErrores.hora = "La hora es obligatoria.";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      alert("Formulario válido ✅");
      alert("Datos enviados");
      // guardo la cita en el array la citas
      setCitas([...citas, { nombreMascota, nombreDuenio, fecha, hora }]);
      // Limpiar el formulario
      setNombreMascota("");
      setNombreDuenio("");
      setFecha("");
      setHora("");
      setErrors({});
    } else {
      alert("Completar todos los datos ❌");
    }
  };

  return (
    <>
      <section className="container sombra bg-info-subtle rounded mt-3">
        <Form className="py-3" onSubmit={handleSubmit}>
          <Form.Text className="text-muted">
            Los campos con un (<span className="text-danger">*</span>) son
            obligatorios
          </Form.Text>

          <Form.Group>
            <Form.Label>
              Nombre de la mascota: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Firulais"
              value={nombreMascota}
              onChange={(e) => setNombreMascota(e.target.value)}
              isInvalid={!!errors.nombreMascota}
              isValid={nombreMascota && !errors.nombreMascota}
              minLength={2}
              maxLength={50}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombreMascota}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Nombre del dueño: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Marcos"
              value={nombreDuenio}
              onChange={(e) => setNombreDuenio(e.target.value)}
              isInvalid={!!errors.nombreDuenio}
              isValid={nombreDuenio && !errors.nombreDuenio}
              minLength={2}
              maxLength={50}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombreDuenio}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Fecha: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="xx xxx xxx"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              isInvalid={!!errors.fecha}
              isValid={fecha && !errors.fecha}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.fecha}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Hora: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="xx xxx xxx"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              isInvalid={!!errors.hora}
              isValid={hora && !errors.hora}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.hora}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="info" type="submit" className="mt-3 d-flex mx-auto">
            Agregar nueva cita
          </Button>
        </Form>
      </section>
      <CitasRow citas={citas}></CitasRow>
    </>
  );
};

export default Formulario;
