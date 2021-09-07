import React from 'react'
import Card from 'react-bootstrap/Card'

const DefinitionCard = () => {
  return (
    <Card className="CardStyle" style={{ backgroundColor: '#30363f' }}>
      <Card.Body>
        <Card.Title>ArcGis</Card.Title>
        <Card.Body>
          Es un completo sistema que permite recopilar, organizar, administrar,
          analizar, compartir y distribuir información geográfica. Como la
          plataforma líder mundial para crear y utilizar sistemas de información
          geográfica (SIG), ArcGIS es utilizada por personas de todo el mundo
          para poner el conocimiento geográfico al servicio de los sectores del
          gobierno, la empresa, la ciencia, la educación y los medios. ArcGIS se
          debe concebir como una plataforma completa en la que cualquier persona
          puede trabajar con información geográfica y aplicarla. La mayoría de
          las personas utilizan mapas para trabajar con información geográfica,
          pero no solo mapas impresos, sino mapas en línea interactivos que
          permiten comprender la información de su organización, las
          herramientas de análisis, tareas y flujos de trabajo, las cuales las
          personas de su organización utilicen para trabajar en forma más
          eficiente.
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

export default DefinitionCard
