import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import CitasRow from "./CitasRow";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validarEmail = (valor) => {
    const regExp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regExp.test(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (nombre.trim().length < 2 || nombre.trim().length > 50) {
      nuevosErrores.nombre = "El nombre debe tener entre 2 y 50 caracteres.";
    }

    if (apellido.trim().length < 2 || apellido.trim().length > 50) {
      nuevosErrores.apellido =
        "El apellido debe tener entre 2 y 50 caracteres.";
    }

    if (dni.trim().length < 7 || dni.trim().length > 10) {
      nuevosErrores.dni = "El DNI debe tener entre 7 y 10 dígitos.";
    }

    if (!validarEmail(email)) {
      nuevosErrores.email = "El email no es válido.";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      alert("Formulario válido ✅");
      alert("Datos enviados");
    } else {
      alert("Completar todos los datos ❌");
    }
  };

  return (
    <>
      <section className="container sombra bg-info-subtle rounded mt-3 w-md-50">
        <Form className="py-3" onSubmit={handleSubmit}>
          <Form.Text className="text-muted">
            Los campos con un (<span className="text-danger">*</span>) son
            obligatorios
          </Form.Text>

          <Form.Group>
            <Form.Label>
              Nombre: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Marcos"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              isInvalid={!!errors.nombre}
              isValid={nombre && !errors.nombre}
              minLength={2}
              maxLength={50}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Apellido: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Tebis"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              isInvalid={!!errors.apellido}
              isValid={apellido && !errors.apellido}
              minLength={2}
              maxLength={50}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              DNI: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="xx xxx xxx"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              isInvalid={!!errors.dni}
              isValid={dni && !errors.dni}
              minLength={7}
              maxLength={10}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.dni}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
              isValid={email && !errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
      <section>
        <CitasRow></CitasRow>
      </section>
    </>
  );
};

export default Formulario;
