import { React, useEffect, useState } from 'react'
import '../style.css'
import { randomFact } from './services/facts'

// custom hook
const useCatImage = ({ fact }) => {
  const [imgCat, setImgCat] = useState()

  useEffect(() => {
    if (!fact) return
    const palabraUnica = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${palabraUnica}?size=50&json=true`)
      .then(res => res.json())
      .then(response => {
        setImgCat(response.url)
      })
  }, [fact])

  return { imgCat }
}

export const App = () => {
  const [fact, setFact] = useState()
  const { imgCat } = useCatImage({ fact })

  useEffect(() => {
    randomFact().then(setFact)
  }, [])

  const handleClick = async () => {
    const newFact = await randomFact()
    setFact(newFact)
  }
  return (
    <main>
      <h1>APP DE GATOS</h1>
      <button onClick={handleClick}>Nuevo Gato</button>
      <section>
        {fact && <p>{fact}</p>}
        {imgCat && <img src={`https://cataas.com${imgCat}`} alt={`imagenes de gatos ${fact}`} />}
      </section>
    </main>
  )
}
