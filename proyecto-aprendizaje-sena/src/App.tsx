import { Header,Seccion } from './components/index';
import gente from './pictures/fotoGente.jpg';
import me from './pictures/me.png';
function App(){
  
  return(
    <>
      <Header/>
      <Seccion
      titulo="Bienvenido a mi 'Proyecto Aprendizaje Sena'"
      descripcion="Aunque me gusta llamaerlo mas 'AS', este es un pequeño proyecto está pensado para subir la mayor cantidad de mis actividades relacionadas con la programación que iré realizando segúnel paso del tiempo. <br> qui podras encontrar información sobre este futuro o pasado cadaver, proyectos de JavaScript o lo que surja por el caminoespero que esto sea un buen recuerdo e incluir muchas tecnologias :D"
      imagen={gente}
      posicion="izquierda"
      />
      <Seccion
      titulo="Sobre mí"
      descripcion="Hola, mi nombre es Cristian Giraldo Álvarez, soy colombiano y tengo 21 años. Actualmente estoy aprendiendo a programar en el SENA, y me apasiona todo lo relacionado con el avance humano hacia un mejor futuro. Disfruto mucho de los videojuegos, la música, las películas, las series y la lectura. En cuanto a los deportes, aunque los disfruto no son lo mío.

Me considero una persona ética, con buenas habilidades blandas y una buena actitud. Me gusta ayudar a mis compañeros con cualquier duda que tengan, ya que eso también me ayuda a fortalecer mis conocimientos. Hasta ahora, mi camino no ha sido fácil; no tener estabilidad económica es un desafío, pero tengo fe y trabajo para cambiar esa situación. Eso sería un poco sobre mí. ¡Espero que disfrutes el contenido de este sitio en construcción! :D"
      imagen={me}
      alto='350px'
      ancho='350px'
      posicion="derecha"
      />
  
  
    </>
  )
}
export default App;  