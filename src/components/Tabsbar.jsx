import React from 'react'
import Tab from './Tab'
import estilo from '../styles/tabsbar.module.css'
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiGithubBadge } from "react-icons/di";

const Tabsbar = () => {
  return (
    <div className={estilo.tabs}>
      <Tab icon = {<DiReact/>} iconColor="#4fbfe4" filename="home.jsx" path="/"></Tab>
      <Tab icon ={<DiHtml5/>} iconColor="#ff5900" filename="about.html" path="/about"></Tab>
      <Tab icon = {<DiCss3/>} iconColor="#1581e0" filename="contact.css" path="/contact"></Tab>
      <Tab icon = {<DiJsBadge/>} iconColor="#ead200" filename="skills.js" path="/skills"></Tab>
      <Tab icon = {<DiGithubBadge/>} iconColor="lightgrey" filename="projects.git" path="/projects"></Tab>
    </div>
  )
}

export default Tabsbar