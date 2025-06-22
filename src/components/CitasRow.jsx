import ColumasCard from "./ColumasCard";

const CitasRow = ({ citas }) => {
  return (
    <section className="container sombra bg-info-subtle rounded mt-3">
      <h3 className="text-center text-danger">Listado de citas</h3>
      {citas.length === 0 && (
        <p className="text-center text-warning fs-5 fw-bold fst-italic">
          No hay citas registradas.
        </p>
      )}
      {citas.length !== 0 &&
        citas.map((cita, indice) => (
          <ColumasCard key={indice} citas={citas}></ColumasCard>
        ))}
    </section>
  );
};

export default CitasRow;
