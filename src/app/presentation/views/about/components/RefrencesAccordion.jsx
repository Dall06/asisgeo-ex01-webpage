import React, { useCallback, useEffect, useState } from 'react'
import bibliografiaJSON from '../../../../../core/resources/bibliografia.json'
import '../styles.css'

const ReferencesAccordion = () => {
  const [hrefRender, setHrefRender] = useState()

  useEffect(() => {
    renderReferences()
  }, [])
  const renderReferences = useCallback(() => {
    let aux = []
    bibliografiaJSON.forEach((element, index) => {
      aux.push(
        <a
          key={index}
          className="references-accordeon-div"
          target="_blank"
          href={element.link}
        >
          <div>{element.data}</div>
        </a>,
      )
    })

    setHrefRender(aux)
  }, [])

  return <> {hrefRender} </>
}

export default ReferencesAccordion
