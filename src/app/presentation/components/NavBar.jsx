import React from "react";
import '../../../App.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useHistory  } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Parcial 1</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => history.push("/asisgeo-ex01-webpage/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push("/asisgeo-ex01-webpage/intro")}>Introduction</Nav.Link>
                    <Nav.Link onClick={() => history.push("/asisgeo-ex01-webpage/arcgis")}>Practica</Nav.Link>
                    <Nav.Link onClick={() => history.push("/asisgeo-ex01-webpage/about")}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;