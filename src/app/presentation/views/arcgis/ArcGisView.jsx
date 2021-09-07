import React, { useCallback, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
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
    practiceJSON.forEach((element) => {
        // console.log(element)
      render.push(
        <InfoCard imgs={element.Imágenes} des={element.Descripción} />,
      )
    })
    setStepsRender(render)
  }, [])

  return (
    <Container>
      <DefinitionCard />
      {stepsRender}
    </Container>
  )
}

export default ArcGisView
