import React from 'react';
import Card from 'react-bootstrap/Card';

const DefinitionCard = () => {
    return (
        <Card className="CardStyle" style={{backgroundColor: '#30363f'}}>
            <Card.Body>
                <Card.Title>ArcGis</Card.Title>
                <Card.Body>
                    Aqui va a la descripcion de ArcGis
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default DefinitionCard;