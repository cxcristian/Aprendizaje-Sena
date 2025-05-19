import "./Seccioniz.css";

type SeccionProps = {
  titulo: string;
  descripcion: string;
  imagen: string;
  posicion: "izquierda" | "derecha";
};
export function Seccion({
  titulo,
  descripcion,
  imagen,
  posicion,
}: SeccionProps) {
  const imagenPrimero = posicion === "izquierda";
  return (
    <>
      <section
        className="seccion-flex"
        style={{ flexDirection: imagenPrimero ? "row" : "row-reverse" }}
      >
        <article className="saludo">
          <header>
            <h3>{titulo}</h3>
          </header>
          <article>
            <p className="limitar">{descripcion}</p>
          </article>
        </article>

        <figure className="contenedor-img">
          <img
            style={{ borderRadius: "15px" }}
            src={imagen}
            alt="img proyecto"
          />
        </figure>
      </section>
    </>
  );
}
export default Seccion;
