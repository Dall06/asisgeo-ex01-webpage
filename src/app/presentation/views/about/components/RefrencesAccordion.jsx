import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../styles.css'

const ReferencesAccordion = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Reference 1</Accordion.Header>
                <Accordion.Body>
                    Aqui van la informacion de la referencia
                    Generar una de estas por cada referencia
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ReferencesAccordion;