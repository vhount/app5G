import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home.js'
import Equipe from './pages/Equipe.js'
import Contact from './pages/Contact.js'
import Navbar2 from './components/Navbar2.js'
import FAQ from './pages/FAQ'
import Antennes from './components/Antennes'

/* router */
const App = () => {

  return (

    <>
      <div className="App">
        <Router>
          <Navbar2 sticky="top" />
          <Route exact path='/' component={Home} />
          <Route exact path='/Equipe' component={Equipe} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/FAQ' component={FAQ} />
          <Route exact path='/Antennes' component={Antennes} />
        </Router>
      </div>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
        </div>
      </main>
      {/* footer */}
     {/*  <Container > */}
        <nav className="navbar navbar-light bg-white justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Mentions Légales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OnTheRoad5G.io &#169;{new Date().getFullYear()}</a>
            </li>
          </ul>
        </nav>
        {/*</Container> */}


    </>
  );
}

export default App;
