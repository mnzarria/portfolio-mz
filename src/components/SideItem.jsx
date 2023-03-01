import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import estilo from '../styles/sideItem.module.css'

const SideItem = ({icon, path}) => {

    const location = useLocation().pathname;

    return (
    <Link to={path}>
        <div className={`${estilo.sideItem} ${location === path && estilo.active}`}>            
            <span className={estilo.icon} >{icon}</span>
        </div>
    </Link>
  )
}

export default SideItem