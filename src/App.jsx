import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main>
        <h1 className="text-center mt-4 text-primary">
          Administador pacientes de veterinaria
        </h1>
        <Formulario></Formulario>
      </main>
      <footer className="text-center text-light bg-black py-1 sombra">
        <p>
          By{" "}
          <a
            href="https://github.com/KR3RULIE"
            target="blank"
            className="text-decoration-none text-danger"
          >
            KR3RULIE
          </a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
