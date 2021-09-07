import React from 'react';
import Card from 'react-bootstrap/Card';

const ConclusionsCard = () => {
    return (
        <Card className="CardStyle" style={{backgroundColor: '#30363f'}}>
            <Card.Body>
                <Card.Title>Conclusiones</Card.Title>
                <Card.Body>
                    Aqui van las conclusiones del proyecto
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default ConclusionsCard;