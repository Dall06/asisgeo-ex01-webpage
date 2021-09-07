import React from "react";
import '../../../App.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="intro">Introduction</Nav.Link>
                    <Nav.Link href="arcgis">Practica</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;