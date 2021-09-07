import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles.css';

const SelectionCard = ({indicateCurrent, defs}) => {
    const [title, setTtile] = useState('Seleccionar');

    const setProps = (d) => {
        indicateCurrent(d)
        setTtile(d.name)
    }

    return (
        <Card bg="dark" text="light">
            <Card.Body>
                <Card.Title>Busqueda de termino</Card.Title>
                <Card.Body>
                    <DropdownButton
                        variant="outline-secondary"
                        title={title}
                        id="input-group-dropdown-1"
                        className="ButtonD"
                    >
                        {defs.map((d) => {
                            return(
                                <Dropdown.Item eventKey={d.id} key={d.id} onClick={() => indicateCurrent(d)}>{d.name}</Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default SelectionCard;