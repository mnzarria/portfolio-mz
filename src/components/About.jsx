import React from 'react'
import fotoPerfil from '../assets/img/foto-perfil.jpg'
import estilo from '../styles/about.module.css'
import Button from "react-bootstrap/Button";
import { TypeAnimation } from 'react-type-animation';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom'
import cv from '../assets/files/CV_MZ_FEB_23.pdf'

const About = () => {

  return (
        <div>
            <div className={estilo.rowhome}>
                <div className={estilo.divPerfil}>
                    <img src={fotoPerfil} alt="foto-perfil" className={estilo.fotoPerfil}/>
                    <h3>Matías Zarria</h3>
                    <Button className={estilo.button} href="/contact">Contacto</Button>
                    <Button className={estilo.button}><Link className={estilo.link} to={cv} target="_blank" download>Descargar CV</Link></Button>
                </div>
                <div className={estilo.divText}>
                    <h2>SOBRE MÍ</h2>
                    <Accordion className={estilo.accordion} defaultActiveKey="1" flush>
                        {/* BACKGROUND */}
                        <Accordion.Item className={estilo.accordionItem} eventKey="1">
                            <Accordion.Header className={estilo.accordionTitle}>.background {"{"}</Accordion.Header>
                            <Accordion.Body>
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={['Llevo 9 años trabajando con distintos equipos de profesionales y con personas de todo el mundo.',
                                            1000,
                                            'Llevo 9 años trabajando con distintos equipos de profesionales y con personas de todo el mundo. Mi experiencia laboral me llevó a liderar más de 60 proyectos de ingeniería, habiendo participado en total en más de 100 a lo largo de mi carrera.'
                                        ]}
                                            speed={75} 
                                            repeat={0}
                                        />
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[8200,
                                            'Me gusta aprender de los que saben más y ayudar a los que recién están comenzando.',
                                            1000,
                                            'Me gusta aprender de los que saben más y ayudar a los que recién están comenzando. Estoy acostumbrado a adaptarme a distintas tareas, ambientes y equipos de trabajo.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />    
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[15500,
                                            'Siempre tuve interés en el mundo de la programación, y aproveché el último tiempo para formarme como Desarrollador Fullstack.',
                                            1000,
                                            'Siempre tuve interés en el mundo de la programación, y aproveché el último tiempo para formarme como Desarrollador Fullstack. He completado cursos de Desarrollo Web, JavaScript, ReactJS, Testing Manual y sigo sumando muchas horas de práctica para familiarizarme con distintos frameworks y herramientas de trabajo.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[15500 + 8200 + 3000,
                                            'Podés ver algunos de mis trabajos en la sección de Proyectos.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />                                                                                        
                            </Accordion.Body>                
                        </Accordion.Item>
                        <Accordion.Header className={estilo.accordionTitle} >{"}"}</Accordion.Header>
                        {/* ABOUT ME */}
                        <Accordion.Item className={estilo.accordionItem} eventKey="2">
                            <Accordion.Header className={estilo.accordionTitle}>.self-description {"{"}</Accordion.Header>
                            <Accordion.Body>
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={['Tengo 31 años y soy nacido en Rosario, Santa Fe, Argentina. Me considero una persona dinámica, mas bien introvertida y con mucha paciencia.',
                                            1000,
                                            'Tengo 31 años y soy nacido en Rosario, Santa Fe, Argentina. Me considero una persona dinámica, mas bien introvertida y con mucha paciencia. En mi día a día me mantengo activo, me gusta tener tiempo libre para aprender nuevas habilidades y practicar deporte (principalmente running y ciclismo).'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />       
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[9500,
                                            'Me gusta mucho viajar, hasta el momento conozco 15 países y visité más de 180 ciudades.',
                                            1000,
                                            'Me gusta mucho viajar, hasta el momento conozco 15 países y visité más de 180 ciudades. Disfruto de conocer personas con distintas culturas, y sobre todo probar nuevas comidas.',
                                            1000,
                                            'Me gusta mucho viajar, hasta el momento conozco 15 países y visité más de 180 ciudades. Disfruto de conocer personas con distintas culturas, y sobre todo probar nuevas comidas. Ingresé al mundo IT para poder convertirme en nómada digital.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />                                         
                            </Accordion.Body>                    
                        </Accordion.Item>
                        <Accordion.Header className={estilo.accordionTitle} >{"}"}</Accordion.Header>
                        {/* NOW */}
                        <Accordion.Item className={estilo.accordionItem} eventKey="3">
                            <Accordion.Header className={estilo.accordionTitle}>.now {"{"}</Accordion.Header>
                            <Accordion.Body>
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={['Actualmente estoy estudiando Backend con herramientas como NodeJS y mongoDB.',
                                            1000,
                                            'Actualmente estoy estudiando Backend con herramientas como NodeJS y mongoDB. Realizo nuevos proyectos todo el tiempo, para mejorar mis habilidades y poner en práctica todo lo que aprendo.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />           
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[6500,
                                            'Me encuentro buscando oportunidades laborales dentro del mundo IT, por lo cual seguiré cargando mis nuevos proyectos en este portfolio para que puedas ver mi trabajo.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />            
                                        <TypeAnimation className={estilo.description}
                                            cursor={false}
                                            sequence={[10500,
                                            'Podes comunicarte conmigo por cualquiera de mis medios de contacto.'
                                            ]}
                                            speed={75} 
                                            repeat={0}
                                        />                                                                         
                            </Accordion.Body>                    
                        </Accordion.Item>
                        <Accordion.Header className={estilo.accordionTitle} >{"}"}</Accordion.Header>
                    </Accordion>
                </div>
            </div>
        </div>  
        )
}

export default About