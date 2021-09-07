import React from "react";
import '../../../../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './styles.css';
import { useHistory  } from 'react-router-dom';

const HomeView = () => {
    const history = useHistory();

    return (
        <Container className="home-Container">
            <Row>
                <img src="https://sig.esri.co/wp-content/uploads/2020/03/ES_0320_Banner_COVID-19_GL_01-1.png" alt="geo" />
                <Container className="HeaderContainer">
                    <div>
                        <h1>Bienvenido, Humano!</h1>
                        <h4>Este es un manual sobre las principales funcionalidades de ArcGis, sientete libre de explorar el sitio :)</h4>
                    </div>
                </Container>
                <Container className="CardContainer">
                    <Button variant="primary" className="Button" onClick={() => history.push("/asisgeo-ex01-webpage/intro")}>Saber mas</Button>
                </Container>
                <Container className="CardContainer" style={{marginTop: 62}}>
                    <a className="btn Button btn-primary" href="https://img-prueba-delr.s3.us-east-2.amazonaws.com/asisgeo-ex01-report.pdf" download>Descargar</a>
                </Container>
            </Row>
        </Container>
    );
}

export default HomeView;