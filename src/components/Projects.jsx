import React from 'react'
import estilo from '../styles/projects.module.css'
import p1img1 from '../assets/img/planterhouse_1.png'
import p1img2 from '../assets/img/planterhouse_2.png'
import p1img3 from '../assets/img/planterhouse_3.png'
import p1img1mob from '../assets/img/planterhouse_1_mob.png'
import p1img2mob from '../assets/img/planterhouse_2_mob.png'
import p1img3mob from '../assets/img/planterhouse_3_mob.png'
import p2img1 from '../assets/img/headcoach_1.png'
import p2img2 from '../assets/img/headcoach_2.png'
import p2img3 from '../assets/img/headcoach_3.png'
import p3img1 from '../assets/img/portfolio_1.png'
import p3img2 from '../assets/img/portfolio_3.png'
import p3img3 from '../assets/img/portfolio_2.png'
import p3img1mob from '../assets/img/portfolio_1_mob.png'
import p3img2mob from '../assets/img/portfolio_3_mob.png'
import p3img3mob from '../assets/img/portfolio_2_mob.png'
import ProjectItem from './ProjectItem'

const Projects = () => {

  return (         
    <div className={estilo.projects}>
          <ProjectItem 
          Title = "Planterhouse"
          Description1 = "Este es mi primer sitio web estático, desarrollado integramente con HTML y vanilla CSS, como proyecto final del curso de Desarrollo Web."
          Description2 = "Es un catálogo de e-commerce, dado que el curso no contemplaba webs con mayores funcionalidades."
          Stack1      =   "HTML"
          Stack2      =   "CSS"
          Stack3      =   "Javascript"
          FunctTitle1 = ""
          Funct1 = "Utilicé Bootstrap para la mayor parte del maquetado. La página 'Clientes' está hecha con grids, ya que era un requisito para esta instancia. Para las animaciones usé AOS (publicidades/productos), Codepen (header) y hovers configurados a mano en productos, categorías y links de redes sociales."
          FunctTitle2 = ""
          Funct2 = "Todo el estilo del sitio está hecho con SASS salvo la última página que agregué (Clientes), dado que así lo solicitaba la consigna del curso. En la versión mobile, por decisión propia, algunos de los elementos quedan ocultos (publicidades, aside de productos, imagen del formulario de contacto)."
          Img1         =   {p1img1}
          Img2         =   {p1img2}
          Img3         =   {p1img3}
          Img1mob      =   {p1img1mob}
          Img2mob      =   {p1img2mob}
          Img3mob      =   {p1img3mob}
          WebLink     =   "https://mnzarria.github.io/first-web-development-project/"
          CodeLink    =   "https://github.com/mnzarria/first-web-development-project/tree/entregaFinal"
          />

          <ProjectItem 
          Title = "Headcoach"
          Description1 = "Este es mi primer sitio web desarrollado con ReactJs. Desarrollé desde cero una web para comprar los stickers del mundial Qatar 2020. "
          Description2 = "Posee un catálogo separado por categorías, vista de detalle de cada producto y un shopping cart."
          Stack1      =   "HTML+CSS"
          Stack2      =   "ReactJS"
          Stack3      =   "Firebase"
          FunctTitle1 = ""
          Funct1 = "En este sitio utilicé librerías tales como react-bootstrap para el estilo general, react-hook-form para el formulario de compra y react-router-dom para configurar las navegaciones. La base de datos se puede cargar desde un archivo .JSON o directamente desde Firebase."
          FunctTitle2 = ""
          Funct2 = "Cuenta con un carrito de compras completamente funcional, vinculado con una base de datos en Firebase que permite consultar los productos y enviar una orden de compra. Gestiona el stock de los productos actualizándolo luego de cada pedido."
          Img1         =   {p2img1}
          Img2         =   {p2img2}
          Img3         =   {p2img3}
          WebLink     =   ""
          CodeLink    =   "https://github.com/mnzarria/proyectoFinalReactJS/tree/entregaFinal"
          />

          <ProjectItem 
          Title = "Portfolio personal"
          Description1 = "Este es mi portfolio personal, desarrollado desde cero con ReactJs. Intenté recrear el estilo gráfico de Visual Studio Code."
          Description2 = "Posee 3 barras de navegación para acceder a las distintas secciones."
          Stack1      =   "HTML"
          Stack2      =   "CSS"
          Stack3      =   "ReactJS"
          FunctTitle1 = ""
          Funct1 = "La sección de proyectos permite tener una vista previa de cada sitio web que desarrollé, las tecnologías utilizadas y acceso a los links de repositorio y página alojada en Github Pages."
          FunctTitle2 = ""
          Funct2 = "El sitio es responsive y puede ser visto tanto en versión web como mobile."
          Img1         =   {p3img1}
          Img2         =   {p3img2}
          Img3         =   {p3img3}
          Img1mob      =   {p3img1mob}
          Img2mob      =   {p3img2mob}
          Img3mob      =   {p3img3mob}
          WebLink     =   "https://mnzarria.github.io/portfolio-mz/"
          CodeLink    =   "https://github.com/mnzarria/portfolio-mz"
          />
        
    </div>
  )
}

export default Projects