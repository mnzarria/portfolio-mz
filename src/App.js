import './App.css';
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills';
import Projects from './components/Projects'
import "./styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path= '/' element = {<Index/>}/>
          <Route path= '/about' element = {<About/>}/>
          <Route path= '/skills' element = {<Skills/>}/>
          <Route path= '/contact' element = {<Contact/>}/>
          <Route path= '/projects' element = {<Projects/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
