import "./SeccionD.css";

type SeccionProps = {
  titulo: string;
  descripcion: string;
  imagen?: string;
  ancho?: string;
  alto?: string;
  extraStyle?: string;
};
export function SeccionD({
  titulo,
  descripcion,
  imagen,
  ancho,
  alto,
}: SeccionProps) {
  return (
    <>
      <aside className="sobreMi" id="myInfo">
        <figure className="miFoto">
          <img
            src={imagen}
            alt=""
            style={{ borderRadius: "100px", height: alto, width: ancho }}
          />
        </figure>

        <article className="info">
          <header>
            <h2>{titulo}</h2>
          </header>
          <article>
            <p>{descripcion}</p>
          </article>
        </article>
      </aside>
    </>
  );
}
export default SeccionD;
