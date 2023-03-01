import React from 'react'
import estilo from '../styles/projectitem.module.css'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const ProjectItem = (props) => {
  return (
    <div className={estilo.container}>
        {/* Elementos Desktop */}
        <div className={estilo.column} id={estilo.column1}>
            <div className={estilo.content}>
                <h1>1</h1>
                <div className={estilo.box}>
                    <h2>{props.Title}</h2><br />
                    <p>{props.Description1}</p>
                    <p>{props.Description2}</p>
                    <p>En este proyecto utilicé las siguientes tecnologías:</p>
                    <Button variant="light" size="sm" >{props.Stack1}</Button>{' '}
                    <Button variant="light" size="sm" >{props.Stack2}</Button>{' '}
                    <Button variant="light" size="sm" >{props.Stack3}</Button>{' '}
                </div>
            </div>
            <div style={{background:`url(${props.Img1})`,backgroundSize: "cover"}} className={estilo.bg}></div>
        </div>

        <div className={estilo.column} id={estilo.column2}>
            <div className={estilo.content}>
                <h1>2</h1>
                <div className={estilo.box}>
                    <h2>{props.FunctTitle1}</h2>
                    <p>{props.Funct1}</p>
                </div>
            </div>
            <div style={{background:`url(${props.Img2})`, backgroundSize: "cover"}} className={estilo.bg}></div>
        </div>

        <div className={estilo.column} id={estilo.column3}>
            <div className={estilo.content}>
                <h1>3</h1>
                <div className={estilo.box}>
                    <h2>{props.FunctTitle2}</h2>
                    <p>{props.Funct2}</p>
                </div>
            </div>
            <div style={{background:`url(${props.Img3})`, backgroundSize: "cover"}} className={estilo.bg} ></div>
        </div>

        <div className={estilo.column} id={estilo.column4}>
            <div className={estilo.content}>
                <h1>4</h1>
                <div className={estilo.box}>
                    <h2>Links</h2>
                    <p>Para ver mas detalles sobre este proyecto te invito a:</p>
                    <Button variant="light" size="sm"><a href={props.WebLink} target="_blank" rel="noopener noreferrer">Visitar página</a></Button>
                    <Button variant="light" size="sm"><a href={props.CodeLink} target="_blank" rel="noopener noreferrer">Ver el código</a></Button>
                </div>
            </div>
            <div style={{background:`url(${props.Img1})`, backgroundSize: "cover"}} className={estilo.bg}></div>
        </div>

        {/* Elementos Mobile */}
        <div className={estilo.columnMob} id={estilo.column1}>
        <Carousel className={estilo.carousel} indicators = "false" controls = "false">
            
            <Carousel.Item className={estilo.carouselItem}>
                <Card className={estilo.card}>
                    <Card.Img className={estilo.imgMob} src={props.Img1mob}/>
                    <Card.Body className={estilo.cardbody}>
                        <Card.Title>{props.Title}</Card.Title>
                        <Card.Text>{props.Description1}</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
                <Card className={estilo.card}>

                    <Card.Img className={estilo.imgMob} src={props.Img2mob}/>
                    <Card.Body className={estilo.cardbody}>
                        <Card.Text>{props.Funct1}</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
                <Card className={estilo.card}>
                    <Card.Img className={estilo.imgMob} src={props.Img3mob}/>
                    <Card.Body className={estilo.cardbody}>
                        <Card.Text>{props.Funct2}</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item className={estilo.carouselItem}>
                <Card className={estilo.card}>
                    <Card.Img className={estilo.imgMob} src={props.Img1mob}/>
                    <Card.Body className={estilo.cardbody}>
                        <div className={estilo.box}>
                            <h2>Links</h2>
                            <p>Para ver mas detalles sobre este proyecto te invito a:</p>
                            <Button variant="light" size="sm"><a href={props.WebLink} target="_blank" rel="noopener noreferrer">Visitar página</a></Button>
                            <Button variant="light" size="sm"><a href={props.CodeLink} target="_blank" rel="noopener noreferrer">Ver el código</a></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            
        </Carousel>
        </div>

    </div>
        )
}

export default ProjectItem