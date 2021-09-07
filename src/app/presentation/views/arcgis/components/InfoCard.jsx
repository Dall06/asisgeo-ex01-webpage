import React from "react";
import Card from 'react-bootstrap/Card';

const InfoCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Esta tarjeta muestra el paso numero 1</Card.Title>
                <Card.Text>
                    Aqui va la descriopcion del paso y en img la imagen.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default InfoCard;