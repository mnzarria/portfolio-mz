import React from 'react'
import estilo from '../styles/explorer.module.css'
import {Link} from 'react-router-dom'
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiGithubBadge } from "react-icons/di";
// import Button from 'react-bootstrap/esm/Button';

const Explorer = () => {
  return (
    <div className={estilo.explorer}>
      <p style={{fontSize : "12px", color : "grey"}}>EXPLORER</p>
      <br />
      <p style={{fontSize : "14px"}}>PORTFOLIO MZ</p>
      <ul>
        <li><Link to="/"><DiReact className={estilo.expIcon} style={{color: "#4fbfe4"}}/> home.jsx</Link></li>
        <li><Link to="/about"><DiHtml5 className={estilo.expIcon} style={{color: "#ff5900"}}/> about.html</Link></li>
        <li><Link to="/contact"><DiCss3 className={estilo.expIcon} style={{color: "#1581e0"}}/> contact.css</Link></li>
        <li><Link to="/skills"><DiJsBadge className={estilo.expIcon} style={{color: "#ead200"}}/> skills.js</Link></li>
        <li><Link to="/projects"><DiGithubBadge className={estilo.expIcon} style={{color: "#lightgrey"}}/> projects.git</Link></li>
      </ul>
      {/* <Button className={estilo.botonCerrar}>CERRAR</Button> */}
    </div>
  )
}

export default Explorer