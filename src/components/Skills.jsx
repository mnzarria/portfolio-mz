import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import {  AiFillHtml5,  AiOutlineCheckSquare,  AiOutlineConsoleSql,} from "react-icons/ai";
import { BiGitBranch, BiListCheck, BiHomeHeart } from "react-icons/bi";
import { BsBarChartSteps } from "react-icons/bs";
import {  FaCss3Alt,  FaBootstrap,  FaSass,  FaReact,  FaNodeJs,} from "react-icons/fa";
import { GrGroup, GrLanguage } from "react-icons/gr";
import { GiTalk, GiBookshelf } from "react-icons/gi";
import { MdReportProblem } from "react-icons/md";
import {  SiJavascript,  SiFirebase,  SiJirasoftware,  SiPostman,  SiMongodb,} from "react-icons/si";
import estilo from "../styles/skills.module.css";
import Carousel from 'react-bootstrap/Carousel';
import cert1 from '../assets/img/cert_reactjs.png'
import cert2 from '../assets/img/cert_crash_course_python.png'
import cert3 from '../assets/img/cert_web_dev.png'
import cert4 from '../assets/img/cert_git.png'
import cert5 from '../assets/img/cert_js.png'
import cert6 from '../assets/img/cert_troubleshooting.png'
import cert7 from '../assets/img/cert_using_python.png'
import cert8 from '../assets/img/cert_conf_management.png'
import cert9 from '../assets/img/cert_eng_project.png'
import cert10 from '../assets/img/cert_english.png'


const Skills = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{display : "flex", flexDirection :"row", flexWrap:"wrap"}}>
              {/* CERTIFICADOS */}

        <div className={estilo.certGroup}>
          <h3>CERTIFICACIONES</h3>
          <Carousel className={estilo.carousel} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert1}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>ReactJS</Card.Title>
                  <Card.Text>Curso de 36 horas sincrónicas, más desarrollo de proyectos, realizado en Coderhouse.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            
            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert2}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Crash Course on Python</Card.Title>
                  <Card.Text>Curso de Google con 26 horas asincrónicas.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert3}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Desarrollo Web</Card.Title>
                  <Card.Text>Curso de 38 horas sincrónicas, más desarrollo de proyectos, realizado en Coderhouse.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert4}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Introduction to Git and Github</Card.Title>
                  <Card.Text>Curso de Google con 15 horas asincrónicas.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert5}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>Curso de 34 horas sincrónicas, más desarrollo de proyectos, realizado en Coderhouse.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert6}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Troubleshooting and Debugging Techniques</Card.Title>
                  <Card.Text>Curso de Google con 16 horas asincrónicas.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert7}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Using Python to Interact with the Operating System</Card.Title>
                  <Card.Text>Curso de Google con 25 horas asincrónicas.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert8}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Configuration Management and the Cloud</Card.Title>
                  <Card.Text>Curso de Google con 14 horas asincrónicas.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert9}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>Engineering Project Management</Card.Title>
                  <Card.Text>Programa especializado de 59 horas asincrónicas dictado por Rice University.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
              <Card className={estilo.card}>
                <Card.Img src={cert10}/>
                <Card.Body className={estilo.cardbody}>
                  <Card.Title>English Reading and Listening C2</Card.Title>
                  <Card.Text>Certificado de inglés de EF SET.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

          </Carousel>
        </div>

        {/* SKILLS */}
      <div className={estilo.skillsGroup}>
        <Container className={estilo.container}>
        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}> Frontend</ListGroup.Item>
          <ListGroup.Item><AiFillHtml5 style={{ color: "#ff5900" }} /> HTML5</ListGroup.Item>
          <ListGroup.Item><FaCss3Alt style={{ color: "#1581e0" }} /> CSS3</ListGroup.Item>
          <ListGroup.Item><FaBootstrap style={{ color: "purple" }} /> Bootstrap</ListGroup.Item>
          <ListGroup.Item><FaSass /> SASS</ListGroup.Item>
          <ListGroup.Item><SiJavascript style={{ color: "#ead200" }} /> Javascript</ListGroup.Item>
          <ListGroup.Item><FaReact style={{ color: "#4fbfe4" }} /> React.js</ListGroup.Item>
        </ListGroup>

        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}>Habilidades blandas </ListGroup.Item>
          <ListGroup.Item> <GrGroup style={{ color: "orange" }} /> Capacidad de liderar positivamente equipos de trabajo </ListGroup.Item>
          <ListGroup.Item> <BsBarChartSteps style={{ color: "#1581e0" }} /> Planificación y seguimiento de tareas </ListGroup.Item>
          <ListGroup.Item> <GiTalk style={{ color: "orange" }} /> Comunicación asertiva </ListGroup.Item>
          <ListGroup.Item> <MdReportProblem style={{ color: "red" }} /> Detección de fallas y oportunidades de mejora </ListGroup.Item>
          <ListGroup.Item> <GiBookshelf style={{ color: "#1581e0" }} /> Autodidacta </ListGroup.Item>
        </ListGroup>

        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}>{" "}Otras</ListGroup.Item>
          <ListGroup.Item><BiGitBranch /> Git</ListGroup.Item>            
          <ListGroup.Item><SiFirebase style={{ color: "#ead200" }} /> Firebase</ListGroup.Item>
        </ListGroup>
        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}>{" "}Testing</ListGroup.Item>
          <ListGroup.Item><SiJirasoftware style={{ color: "#1581e0" }} /> Jira</ListGroup.Item>
          <ListGroup.Item><SiPostman style={{ color: "#ff5900" }} /> Postman</ListGroup.Item>
          <ListGroup.Item><AiOutlineCheckSquare /> QA Testing</ListGroup.Item>
        </ListGroup>

        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}>Lenguajes</ListGroup.Item>
          <ListGroup.Item><BiHomeHeart /> Español nativo</ListGroup.Item>
          <ListGroup.Item><GrLanguage /> Inglés avanzado</ListGroup.Item>
        </ListGroup>

        <ListGroup className={estilo.listgroup}>
          <ListGroup.Item active style={{ backgroundColor: "#1581e0" }}>Aprendiendo ahora</ListGroup.Item>
          <ListGroup.Item><FaNodeJs style={{ color: "green" }} /> Node.js</ListGroup.Item>
          <ListGroup.Item><AiOutlineConsoleSql style={{ color: "#1581e0" }} /> SQL y noSQL</ListGroup.Item>
          <ListGroup.Item><SiMongodb style={{ color: "green" }} /> MongoDB</ListGroup.Item>
          <ListGroup.Item><BiListCheck /> Testing</ListGroup.Item>
        </ListGroup>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
