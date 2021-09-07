import React, { useCallback, useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './styles.css'
import Container from 'react-bootstrap/esm/Container'
import DefinitionCard from './components/DefinitionCard'
import InfoCard from './components/InfoCard'
import practiceJSON from '../../../../core/resources/pasos.json'

const ArcGisView = () => {
  const [stepsRender, setStepsRender] = useState()

  useEffect(() => {
    renderJson()
  }, [])

  const renderJson = useCallback(() => {
    let render = []
    practiceJSON.forEach((element, index) => {
      // console.log(element)
      render.push(
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{element.titulo}</Accordion.Header>
          <Accordion.Body>
            <InfoCard imgs={element.Imágenes} des={element.Descripción} />
          </Accordion.Body>
        </Accordion.Item>,
      )
    })
    setStepsRender(render)
  }, [])

  return (
    <Container>
      <DefinitionCard />
      <Accordion defaultActiveKey="0">{stepsRender}</Accordion>
    </Container>
  )
}

export default ArcGisView
