import React from 'react'
import estilo from '../styles/sidebar.module.css'
import { VscFiles, VscGitMerge, VscSearch, VscExtensions, VscDebugAll} from 'react-icons/vsc'
import SideItem from './SideItem'

const Sidebar = () => {

  return (
    <div className={estilo.sidebar}>
      <SideItem icon = {<VscFiles/>} path="/"></SideItem>
      <SideItem icon = {<VscSearch/>} path="/about"></SideItem>
      <SideItem icon = {<VscExtensions/>} path="/contact"></SideItem>
      <SideItem icon = {<VscGitMerge/>} path="/skills"></SideItem>
      <SideItem icon = {<VscDebugAll/>} path="/projects"></SideItem>
    </div>
  )
}

export default Sidebar