import './Seccioniz.css';
import gente from '../pictures/fotoGente.jpg';
function SeccionI(){
    return(
    <>
     <section className="bienvenida"> 
        <Seccion />
    </section>
    </>
    )
    
}
export function Seccion(){
    return(
    <>
        <article className="saludo" >
            <header> 
                <h3>Bienvenido a mi "Proyecto Aprendizaje Sena"</h3>
            </header>
            <article>
                
                <p className="limitar">Aunque me gusta llamaerlo mas "AS", este es un pequeño proyecto
                    está pensado para subir la mayor cantidad de mis actividades relacionadas con la programación que iré realizando según
                    el paso del tiempo. <br/>qui podras encontrar información sobre este futuro o pasado cadaver, proyectos de <a href="">Java Script</a> o lo que surja por el camino
                    espero que esto sea un buen recuerdo e incluir muchas tecnologias :D
                </p>
            </article>
        </article>
        <figure className="contenedor-img">
            <img style={{ borderRadius: '15px' }} src={gente} alt="img proyecto"/>
        </figure>
    </>
    )
}
export default SeccionI;