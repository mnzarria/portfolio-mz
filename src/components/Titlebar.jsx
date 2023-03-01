import React from 'react'
import estilo from '../styles/titlebar.module.css'
import iconoVSC from '../assets/icons/VSCicon.svg'
import { FaWindowMinimize, FaWindowRestore, FaWindowClose } from "react-icons/fa";


const Titlebar = () => {
  return (
    <div className={estilo.titlebar}>
      
      <img className={estilo.icon} src={iconoVSC} alt="icono vsc" />

      <div className={estilo.items}>
        <p>File</p>
        <p>Edit</p>
        <p>Selection</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={estilo.title}>MatiasZarria.jsx - Frontend Developer</p>

      <div className={estilo.windowButtons}>
        <span><FaWindowMinimize/></span>
        <span><FaWindowRestore/></span>
        <span><FaWindowClose/></span>
      </div>

    </div>
  )
}

export default Titlebar