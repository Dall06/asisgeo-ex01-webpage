import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles.css'
import Container from "react-bootstrap/esm/Container";
import DefinitionCard from "./components/DefinitionCard";
import InfoCard from "./components/InfoCard";

const ArcGisView = () => {
    return (
        <Container>
            <DefinitionCard/>
            <Carousel>
                <Carousel.Item>
                    <InfoCard/>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ArcGisView;