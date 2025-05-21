import "./Seccioniz.css";

type SeccionProps = {
  titulo: string;
  descripcion: string;
  imagen?: string;
  posicion: "izquierda" | "derecha";
  ancho?: string;
  alto?: string;
  extraStyle?:  string;
};
export function SeccionI({
  titulo,
  descripcion,
  imagen,
  posicion,
  ancho,
  alto
}: SeccionProps) {
  const imagenPrimero = posicion === "izquierda";
  return (
    <>
      <section
        className="seccion-flex"
        style={{ flexDirection: imagenPrimero ? "row" : "row-reverse" }}
      >
        <article className="mensaje">
          <header>
            <h3>{titulo}</h3>
          </header>
          <article>
            <p className="limitar">{descripcion}</p>
          </article>
        </article>

        <figure className="contenedor-img">
          <img
            style={{ borderRadius: "15px", height:alto, width:ancho,  }}
            src={imagen}
            alt="img proyecto"
          />
        </figure>
      </section>
    </>
  );
}
export default SeccionI;
