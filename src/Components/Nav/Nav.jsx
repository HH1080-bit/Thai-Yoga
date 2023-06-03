import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';


const Navs = () => {

    return (
        <div>
           <Navbar  expand="lg" className={styles.nav}>
      <Container>
        <Navbar.Brand  className={styles.logo}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.icon} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
              <NavLink to="/" exact className={styles.customLink} >
              <Nav.Link href="#home"      className={styles.link}>
                Home
              </Nav.Link>
              </NavLink>
              
             
           
            <NavLink to="/Events" className={styles.customLink} > 
              <Nav.Link href="#Events" className={styles.link}>
              Yoga and Corporate Events 
              </Nav.Link>
            </NavLink>

            <NavLink to="/Pricing" className={styles.customLink} >
              <Nav.Link href="#Pricing" className={styles.link}>Pricing</Nav.Link>
            </NavLink>
            <NavLink to="/Contact" className={styles.customLink} >
              <Nav.Link href="#Contact" className={styles.link}>Contact Us</Nav.Link>            
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export default Navs;
