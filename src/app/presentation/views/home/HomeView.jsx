import React from "react";
import '../../../../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import HomeAccordion from "./components/HomeAccordion";

const HomeView = () => {
    return (
        <Container className="Container">
            <Row>
                <Col sm={4}>
                    <Container className="HeaderContainer">
                        <div>
                            <h1>Welcome ArtistEr Console</h1>
                            <h4>As a manager you'll be able to check your contracted artist list and other trelevant information</h4>
                        </div>
                    </Container>
                </Col>
                <Col sm={8}>
                    <Container className="CardContainer">
                        <HomeAccordion/>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeView;