import React, { useCallback, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import images from '../../../../../core/data/images'

const InfoCard = ({ imgs = [], des = '' }) => {
  const [itemsCarousel, setItemCarousel] = useState(null)

  useEffect(() => {
    renderItems()
  }, [])

  const renderItems = useCallback(() => {
    let aux = []
    imgs.forEach((img) => {
      let imgAux = images.find((i) => +i.numero === +img)
      aux.push(
        <Carousel.Item>
          <div className="infocard-carrousel-item">
            <img className="d-block w-100" src={imgAux.img} />
          </div>
        </Carousel.Item>,
      )
    })
    setItemCarousel(aux)
  }, [])

  return (
    <div className="infocard-container">
      <Carousel className="infocard-carrousel">{itemsCarousel}</Carousel>
      <div className="infocard-description">{des}</div>
    </div>
  )
}

export default InfoCard
