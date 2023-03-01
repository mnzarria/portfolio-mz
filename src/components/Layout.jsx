import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Titlebar from './Titlebar'
import Explorer from './Explorer';
import Tabsbar from './Tabsbar'
import Bottombar from './Bottombar'
import estilo from '../styles/layout.module.css';
import Spinner from 'react-bootstrap/Spinner';

const Layout = ({children}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    handleShow()

    setTimeout(() => {

        handleClose();
        console.log('page is fully loaded');
      }, 2000);   

    },[]);

  return (
    <>
      {show ? (
          <div className={estilo.loader}>
            <Spinner className={estilo.spinner} variant="primary"/>
          </div>
        ) : (
      <>
          <Titlebar className={estilo.titlebar}/>
          <div className={estilo.main}>
            <Sidebar className={estilo.sidebar}/>
            <Explorer className={estilo.explorer}/>
            <div style={{ width: '100%' }}>
              <Tabsbar />
              <main className={estilo.content}>{children}</main>
            </div>
          </div>
          <Bottombar />
          </>
        )}
    </>
  )
}

export default Layout