import React from 'react'
import Card from 'react-bootstrap/Card'

const ConclusionsCard = () => {
  return (
    <Card className="CardStyle" style={{ backgroundColor: '#30363f' }}>
      <Card.Body>
        <Card.Title>Conclusiones</Card.Title>
        <Card.Body>
          La realización de diferentes prácticas, así como la del proyecto nos
          llevan a entender la funcionabilidad de los GIS, los cuales son una
          herramienta bastante potente que nos permite trabajar con imágenes de
          ciertas áreas y así lograr referenciar puntos o regiones en esta. El
          manejo de coordenadas, así como entender los conceptos básicos de la
          georreferenciación y manejo de mapas nos abren un gran camino de
          posibilidades para el desarrollo de sistemas los cuales, en la
          actualidad, resultan tener una necesidad de este tipo de
          características, ya sean para beneficio del usuario do de la empresa.
          ArcGis como herramienta resulta bastante útil al momento de trabajar
          por lo que es importante tomarla en cuenta debido a sus funciones,
          para elaborar procesos de cartografía, georreferencia o topografía.
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

export default ConclusionsCard
