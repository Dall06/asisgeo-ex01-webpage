import React from "react";
import '../../../../App.css'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles.css'
import DefinitionCard from "./components/DefinitionCard";

const IntroductionView = () => {
    return (
        <Container className="Container">
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Termino
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <DefinitionCard/>
        </Container>
    );
}

export default IntroductionView;