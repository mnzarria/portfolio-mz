import React from 'react'
import estilo from '../styles/tab.module.css'
import {Link, useLocation} from 'react-router-dom'


const Tab = ({ icon, filename, path, iconColor}) => {

  // useLocation para saber en que Tab estoy y cambiar su estilo
  const location = useLocation().pathname;

  return (
    <Link style={{textDecoration : "none"}} to={path}>
      <div className={`${estilo.tab} ${location === path && estilo.active}`}>            
          <span className={estilo.tabIcon} style={{color: iconColor}} >{icon}</span>
          <p>{filename}</p>
      </div>
    </Link>
  )
}

export default Tab