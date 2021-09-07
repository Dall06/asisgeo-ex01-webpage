import React from "react";
import '../../../../App.css'
import Container from 'react-bootstrap/Container';
import './styles.css'
import RefrencesAccordion from "./components/RefrencesAccordion";
import ConclusionsCard from "./components/ConclusionsCard.jsx";

const AboutView = () => {
    return (
        <Container className="about-Container">
            <ConclusionsCard />
            <RefrencesAccordion/>
        </Container>
    );
}

export default AboutView;