import './Header.css';
function Header() {
  return (
    <>
    
      <header className="header">
        <section className="textoHead">
          <h1>PROYECTO APRENDIZAJE SENA</h1>
          <p>Creciendo en el software</p>
        </section>
      </header>

      <nav className='naveg'>
        <section className="botones">
          <button><a href="#myInfo">SOBRE MÍ</a></button>
          <button><a href="#vision">VISIÓN</a></button>
          <button><a href="public/tareaJS.html">PROYECTOS</a></button>
          <button><a href="public/contacto.html">CONTACTO</a></button>
        </section>
      </nav>
    </>
  );
}

export default Header;