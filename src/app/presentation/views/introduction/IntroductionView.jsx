import React, { useEffect, useState } from "react";
import '../../../../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DefinitionCard from './components/DefinitionCard';
import SelectionCard from "./components/SelectionCard";
import response from '../../../../core/resources/definiciones.json';
import './styles.css';

const IntroductionView = () => {
    const [current, setCurrent] = useState(null);
    const [defs, setDefs] = useState([]);

    const indicateCurrent = (data) => {
        console.log(data)
        setCurrent(data);
    }

    const getDefs = async () => {
        setDefs(response);
    };

    useEffect(() => {
        getDefs();
    },[]);

    return (
        <Container className="Container">
            <Row>
                <Col sm={4}>
                    <SelectionCard indicateCurrent={indicateCurrent} defs={defs}/>
                </Col>
                <Col sm={8}>
                    <DefinitionCard current={current}/>
                </Col>
            </Row>
        </Container>
    );
}

export default IntroductionView;