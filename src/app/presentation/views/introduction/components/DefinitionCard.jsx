import React from 'react';
import Card from 'react-bootstrap/Card';

const DefinitionCard = () => {
    return (
        <Card className="CardStyle" style={{backgroundColor: '#30363f'}}>
            <Card.Body>
                <Card.Title>Definicion</Card.Title>
                <Card.Body>
                    Aqui va a aparecer la definicion
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default DefinitionCard;