import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import CitasRow from "./CitasRow";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
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

    if (sintomas.trim().length < 2 || nombreDuenio.trim().length > 50) {
      nuevosErrores.sintomas =
        "Es campo es necesario para saber los detalles de la condición del animal";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      alert("Formulario válido ✅");
      alert("Datos enviados");
      // guardo la cita en el array la citas
      setCitas([
        ...citas,
        { nombreMascota, nombreDuenio, fecha, hora, sintomas },
      ]);
      // Limpiar el formulario
      setNombreMascota("");
      setNombreDuenio("");
      setFecha("");
      setHora("");
      setSintomas("");
      setErrors({});
    } else {
      alert("Completar todos los datos ❌");
    }
  };

  const borrarCita = (indiceDeLaCitaABorrar) => {
    const citasFiltradas = citas.filter(
      (cita, indice) => indice !== indiceDeLaCitaABorrar
    );
    setCitas(citasFiltradas);
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
            <Form.Label className="mt-2">
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
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombreMascota}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">
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
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombreDuenio}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">
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
            <Form.Label className="mt-2">
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

          <Form.Group>
            <Form.Label className="mt-2">
              Sintomas: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Dolor de pasa, vomito, etc."
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              isInvalid={!!errors.sintomas}
              isValid={hora && !errors.sintomas}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.sintomas}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="info" type="submit" className="mt-3 d-flex mx-auto">
            Agregar nueva cita
          </Button>
        </Form>
      </section>
      <CitasRow citas={citas} borrarCita={borrarCita}></CitasRow>
    </>
  );
};

export default Formulario;
