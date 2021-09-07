import React from 'react';
import Card from 'react-bootstrap/Card';

const DefinitionCard = ({ current }) => {
    if (!current) {
        return (
            <Card bg="dark" text="light">
                <Card.Body>
                    <Card.Title>Definicion</Card.Title>
                    <Card.Body>
                        Aqui va a aparecer la definicion
                    </Card.Body>
                </Card.Body>
            </Card>
        );
    }
    return (
        <Card bg="dark" text="light">
            <Card.Body>
                <Card.Title>{current.name}</Card.Title>
                <Card.Body>
                    {current.definiciones.map((d) => {
                        return(d);
                    })}
                </Card.Body>
            </Card.Body>
        </Card>
    );
}

export default DefinitionCard;