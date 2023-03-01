import React, { useState } from 'react'
import estilo from '../styles/index.module.css'
import { TypeAnimation } from 'react-type-animation';


const Index = () => {

  return (
      <div className={estilo.container}>
          <div className={estilo.content}>            
            <TypeAnimation className={estilo.name}
              cursor={false}
              sequence={['Matías Zarria',3000,'',300,'Matías Zarria']}
              speed={30} 
              repeat={0}
            />
            <TypeAnimation className={estilo.description}
              sequence={[1000, 'A human', 1000,'also a Frontend Developer', 500 , '💻 Frontend Developer']}
              speed={60} 
              repeat={0}
            />
          </div>
      </div>
    )
}

export default Index